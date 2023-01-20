using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Models
{
    public class UserLoginModel
    {
        public int ID { get; set; }
        public int UserTypeID { get; set; }
        public Nullable<int> MemberID { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public string LoginID { get; set; }
        public string EmailID { get; set; }
        public Nullable<bool> IsOnline { get; set; }
        public Nullable<System.DateTime> LastLoginDate { get; set; }
        public Nullable<System.DateTime> LastPasswordChangeDate { get; set; }
        public Nullable<System.DateTime> LastLockedDate { get; set; }
        public Nullable<int> LockCount { get; set; }
        public Nullable<bool> IsLock { get; set; }
        public Nullable<int> SecurityQuestionID { get; set; }
        public string SecurityAnswer { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public System.DateTime DateInserted { get; set; }
        public Nullable<System.DateTime> DateUpdated { get; set; }
        public string PasswordSalt { get; set; }
        public Nullable<bool> IsPasswordExpired { get; set; }
        public Nullable<System.DateTime> PasswordExpiryDate { get; set; }
        public string Password { get; set; }
        public string FirmName { get; set; }
        public string PhoneNumber { get; set; }
    }
}