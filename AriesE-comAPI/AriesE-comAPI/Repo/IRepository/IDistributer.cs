using AriesE_comAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.IRepository
{
    public interface IDistributer
    {
        bool OrderProducts(OrdersModel order);
        List<OrdersModel> GetAllOrders();
        List<DistStockModel> GetStock(int id);
    }
}
