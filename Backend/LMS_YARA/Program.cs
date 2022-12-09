using LMS_YARA.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
                builder =>
                {
                    builder.WithOrigins("*")
                            .AllowAnyMethod().AllowAnyHeader();
                });
});
builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITeacherRepository, TeacherRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseCors("MyPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
