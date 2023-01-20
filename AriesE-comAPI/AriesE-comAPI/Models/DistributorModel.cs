using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Models
{
    public class DistributorModel
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string EmailID { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public Nullable<decimal> CreditLimit { get; set; }
        public string FirmName { get; set; }
    }
}