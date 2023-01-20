using AriesE_comAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.IRepository
{
    public interface IAdmin
    {
        List<OrdersModel> GetAllOrders();
        bool VerifyUser(string email, string userName);
        bool ResetPassword(string userName, string password);
    }
}
