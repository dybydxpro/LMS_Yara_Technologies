using LMS_YARA.Models;

namespace LMS_YARA.Repository
{
    public interface ITeacherRepository
    {
        List<Teacher> GetTeachers();

        Teacher GetTeacherbyID(int id);

        bool PostTeachers(TeacherAdd obj);

        bool EditTeachers(Teacher obj);

        bool DeleteTeachers(int id);
    }
}
