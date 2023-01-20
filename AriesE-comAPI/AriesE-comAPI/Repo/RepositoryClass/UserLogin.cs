using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.RepositoryClass
{
    class UserLogin : IUserLogin
    {
        AriesEcommerceEntities dbContext = new AriesEcommerceEntities();

        //public int? MemberID { get; internal set; }
        //public string MiddleInitial { get; internal set; }

        int[] IUserLogin.AuthenticateUser(string loginId, string password)
        {
            int[] user = new int[2];
            var isUser = dbContext.UserLogins.Where(e => e.LoginID == loginId && e.Password == password).FirstOrDefault();
            if (isUser != null)
            {
                user[0] = isUser.ID;
                user[1] = isUser.UserTypeID;
                dbContext.Dispose();
                return user;
            }
            dbContext.Dispose();
            return user;
        }

        List<MyProfileModel> IUserLogin.GetProfile(int id)
        {
            var exists = dbContext.UserLogins.Where(e => e.ID == id).FirstOrDefault();
            List<MyProfileModel> myProfile = null;
            if (exists != null)
            {
                myProfile = (from U in dbContext.UserLogins
                            join M in dbContext.Members
                            on U.ID equals M.ID
                            join MCP in dbContext.MemberContactPhones
                            on U.ID equals MCP.ID
                            join A in dbContext.AddressDetails
                            on U.ID equals A.ID
                            where U.ID == id
                            select new MyProfileModel()
                            {
                                UserName = M.UserName,
                                EmailID = U.EmailID,
                                FirstName = U.FirstName,
                                MiddleInitial = U.MiddleInitial,
                                LastName = U.LastName,
                                PhoneNumber = MCP.PhoneNumber,
                                AddressLine1 = A.AddressLine1,
                                AddressLine2 = A.AddressLine2,
                                City = A.City,
                                StateName = A.StateName,
                                Country = A.Country,
                                ZipCode = A.ZipCode
                            }).ToList<MyProfileModel>();
            }
            dbContext.Dispose();
            return myProfile;
        }

        List<ProductsModel> IUserLogin.GetProducts()
        {
            var productsList = dbContext.Products.Select(e => new ProductsModel()
            {
                ID = e.ID,
                Name = e.Name,
                Description = e.Description,
                ProductID = e.ProductID,
                MARKETID = e.MARKETID,
                DateInserted = e.DateInserted,
                ExpirationDate = e.ExpirationDate,
                ImageURL = e.ImageURL,
                TaxPrice = e.TaxPrice,
                Weight = e.Weight,
                UnitPrice = e.UnitPrice,
                MinimumOrderDty = e.MinimumOrderDty,
                ProductCategoryID = e.ProductCategoryID

            }).ToList<ProductsModel>();
            dbContext.Dispose();
            return productsList;
        }


        bool IUserLogin.EditProfile(UserLoginModel user)
        {
            var isUser = dbContext.UserLogins.Where(e => e.ID == user.ID).FirstOrDefault();
            if(isUser != null)
            {
                isUser.LoginID = user.LoginID;
                isUser.FirstName = user.FirstName;
                isUser.LastName = user.LastName;
                isUser.EmailID = user.EmailID;
                isUser.PhoneNumber = user.PhoneNumber;

                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        List<UserLoginModel> IUserLogin.GetProfiles(int id)
        {
            var profile = dbContext.UserLogins.Where(e => e.ID == id).Select(e => new UserLoginModel()
            {
                LoginID = e.LoginID,
                FirstName = e.FirstName,
                LastName = e.LastName,
                EmailID = e.EmailID,
                PhoneNumber = e.PhoneNumber
            }).ToList<UserLoginModel>();
            dbContext.Dispose();
            return profile;
        }

        bool IUserLogin.EditProfiles(UserLoginModel profile)
        {
            var isProfile = dbContext.UserLogins.Single(e => e.ID == profile.ID);
            if(isProfile != null)
            {
                isProfile.LoginID = profile.LoginID;
                isProfile.FirstName = profile.FirstName;
                isProfile.LastName = profile.LastName;
                isProfile.EmailID = profile.EmailID;
                isProfile.PhoneNumber = profile.PhoneNumber;
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

    }
}
