namespace LMS_YARA.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
    }

    public struct TeacherAdd
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
    }
}
