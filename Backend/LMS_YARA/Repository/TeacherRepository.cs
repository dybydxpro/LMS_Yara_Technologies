using LMS_YARA.Data;
using LMS_YARA.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace LMS_YARA.Repository
{
    public class TeacherRepository : DatabaseConfig, ITeacherRepository
    {
        public List<Teacher> GetTeachers()
        {
            List<Teacher> teacher = new List<Teacher>();
            try
            {
                using (SqlConnection con = new SqlConnection(Connection()))
                {
                    using (SqlCommand cmd = new SqlCommand("[dbo].[getAll]", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        if (con.State == ConnectionState.Closed)
                            con.Open();
                        SqlDataAdapter adp = new SqlDataAdapter(cmd);
                        DataTable dt = new DataTable();
                        adp.Fill(dt);
                        foreach (DataRow dr in dt.Rows)
                        {
                            teacher.Add(new Teacher
                            {
                                Id = Convert.ToInt32(dr[0]),
                                Name = Convert.ToString(dr[1]),
                                Address = Convert.ToString(dr[2]),
                                ContactNumber = Convert.ToString(dr[3])
                            });
                        }
                    }
                }
                return teacher;
            }
            catch (Exception ex)
            {
                return teacher;
            }
        }

        public Teacher GetTeacherbyID(int id)
        {
            List<Teacher> teachers = new List<Teacher>();
            try
            {
                using (SqlConnection con = new SqlConnection(Connection()))
                {
                    using (SqlCommand cmd = new SqlCommand("[dbo].[getOnce]", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Id", id);
                        if (con.State == ConnectionState.Closed)
                            con.Open();
                        SqlDataAdapter adp = new SqlDataAdapter(cmd);
                        DataTable dt = new DataTable();
                        adp.Fill(dt);
                        foreach (DataRow dr in dt.Rows)
                        {
                            teachers.Add(new Teacher
                            {
                                Id = Convert.ToInt32(dr[0]),
                                Name = Convert.ToString(dr[1]),
                                Address = Convert.ToString(dr[2]),
                                ContactNumber = Convert.ToString(dr[3])
                            });
                        }
                    }
                }

                Teacher teacher = new Teacher();
                if (teachers.Count >= 1)
                {
                    teacher.Id = Convert.ToInt32(teachers[0].Id);
                    teacher.Name = Convert.ToString(teachers[0].Name);
                    teacher.Address = Convert.ToString(teachers[0].Address);
                    teacher.ContactNumber = Convert.ToString(teachers[0].ContactNumber);
                }
                else
                {
                    teacher.Id = 0;
                    teacher.Name = "";
                    teacher.Address = "";
                    teacher.ContactNumber = "";
                }
                return teacher;
            }
            catch (Exception ex)
            {
                Teacher teacher = new Teacher();
                teacher.Id = 0;
                teacher.Name = "";
                teacher.Address = "";
                teacher.ContactNumber = "";
                return teacher;
            }
        }

        public bool PostTeachers(TeacherAdd obj)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(Connection()))
                {
                    using (SqlCommand cmd = new SqlCommand("[dbo].[createData]", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@name", obj.Name);
                        cmd.Parameters.AddWithValue("@address", obj.Address);
                        cmd.Parameters.AddWithValue("@contactNumber", obj.ContactNumber);
                        if (con.State == ConnectionState.Closed)
                            con.Open();
                        int i = cmd.ExecuteNonQuery();
                        if (i >= 1)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool EditTeachers(Teacher obj)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(Connection()))
                {
                    using (SqlCommand cmd = new SqlCommand("[dbo].[updateData]", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", obj.Id);
                        cmd.Parameters.AddWithValue("@name", obj.Name);
                        cmd.Parameters.AddWithValue("@address", obj.Address);
                        cmd.Parameters.AddWithValue("@contactNumber", obj.ContactNumber);
                        if (con.State == ConnectionState.Closed)
                            con.Open();
                        int i = cmd.ExecuteNonQuery();
                        if (i >= 1)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteTeachers(int id)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(Connection()))
                {
                    using (SqlCommand cmd = new SqlCommand("[dbo].[deleteData]", con))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id", id);
                        if (con.State == ConnectionState.Closed)
                            con.Open();
                        int i = cmd.ExecuteNonQuery();
                        if (i >= 1)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
