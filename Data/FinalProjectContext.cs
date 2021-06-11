using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinalProject.Models;

namespace FinalProject.Data
{
    public class FinalProjectContext : DbContext
    {
        public FinalProjectContext (DbContextOptions<FinalProjectContext> options)
            : base(options)
        {
        }

        public DbSet<FinalProject.Models.Student> Student { get; set; }

        public DbSet<FinalProject.Models.Teacher> Teacher { get; set; }

        public DbSet<FinalProject.Models.Faculty> Faculty { get; set; }

        public DbSet<FinalProject.Models.Course> Course { get; set; }

        public DbSet<FinalProject.Models.Attendance> Attendance { get; set; }

        public DbSet<FinalProject.Models.User> User { get; set; }
    }
}
