using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalProject.Models
{
    public class Attendance
    {
        public Guid ID { get; set; }
        public DateTime Date { get; set; }
        public Guid Course { get; set; }
        public Guid Teacher { get; set; }
        public char Classroom { get; set; }
        public int Count { get; set; }
    }
}
