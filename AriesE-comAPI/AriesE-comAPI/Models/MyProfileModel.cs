using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Models
{
    public class MyProfileModel
    {
        public string UserName { get; set; }
        public string EmailID { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string StateName { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
    }
}