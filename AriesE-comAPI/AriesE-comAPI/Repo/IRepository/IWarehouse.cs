using AriesE_comAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AriesE_comAPI.Repo.IRepository
{
    public interface IWarehouse
    {
        bool? RegisterWh(UserLoginModel newRegister);
        bool? AddStock(ProductsModel newStock);
        bool AddStockInvent(ProductAvailModel productQty);
        int GetProductQuantity(int productID);
        bool UpdateStock(ProductsModel product);
        bool UpdateQuantity(ProductAvailModel productQty);
        bool DispatchOrder(int orderID);
        List<UserLoginModel> GetAllEmployees();
        bool BlockEmployee(int id);
        bool AddDistStock(DistStockModel distDtock);
    }
}
