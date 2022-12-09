using LMS_YARA.Models;
using LMS_YARA.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS_YARA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly ITeacherRepository _teacherRepository;

        public TeacherController(ITeacherRepository teacherRepository)
        {
            _teacherRepository = teacherRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Teacher>>> GetAllTeachers()
        {
            List<Teacher> teachers = _teacherRepository.GetTeachers().ToList();
            return Ok(teachers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetOnce(int id)
        {
            Teacher teacher = _teacherRepository.GetTeacherbyID(id);
            if (teacher.Id != 0)
            {
                return Ok(teacher);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult<Teacher>> PostTeacher(TeacherAdd obj)
        {
            if (ModelState.IsValid)
            {
                var isOK = _teacherRepository.PostTeachers(obj);
                return Ok(isOK);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut]
        public async Task<ActionResult<Teacher>> EditTeacher(Teacher obj)
        {
            if (ModelState.IsValid)
            {
                var isOK = _teacherRepository.EditTeachers(obj);
                if (isOK)
                {
                    return Ok(isOK);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Teacher>> DeleteTeacher(int id)
        {
            var isOK = _teacherRepository.DeleteTeachers(id);
            if (isOK)
            {
                return Ok(isOK);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
