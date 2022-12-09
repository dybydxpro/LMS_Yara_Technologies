namespace LMS_YARA.Data
{
    public class DatabaseConfig
    {
        public string Connection()
        {
            return "Server=THARINDUD\\SQLEXPRESS;Database=LMS;TrustServerCertificate=True;Trusted_Connection=True;MultipleActiveResultSets=true;";
        }
    }
}
