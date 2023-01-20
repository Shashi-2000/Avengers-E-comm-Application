using AriesE_comAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.IRepository
{
    public interface IUserLogin
    {
        int[] AuthenticateUser(string loginId, string password);
        List<MyProfileModel> GetProfile(int id);
        List<ProductsModel> GetProducts();
        bool EditProfile(UserLoginModel user);
        List<UserLoginModel> GetProfiles(int id);
        bool EditProfiles(UserLoginModel profile);
    }
}
