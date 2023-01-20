using AriesE_comAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.IRepository
{
    public interface IAuthorizer
    {
        List<DistributorModel> GetAllDistributors();
        List<PurchaseOrderModel> PurchaseOrders(int id);
        bool AcceptReject(int orderID, string isAccepted, int distid);
        List<AuthorizerProfileModel> GetProfile(int id);
    }
}
