using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Repo.RepositoryClass
{
    public class Admin : IAdmin
    {
        AriesEcommerceEntities dbContext = new AriesEcommerceEntities();
        List<OrdersModel> IAdmin.GetAllOrders()
        {
            var orders = dbContext.Orders.Select(e => new OrdersModel()
            {
                OrderPlacedDate = e.OrderPlacedDate,
                OrderID = e.OrderID,
                ProductID = e.ProductID,
                ProductName = e.ProductName,
                UnitPrice = e.UnitPrice,
                Quantity = e.Quantity,
                TotalCost = e.TotalCost,
                OrderStatus = e.OrderStatus
            }).ToList<OrdersModel>();
            dbContext.SaveChanges();
            return orders;
        }

        bool IAdmin.VerifyUser(string email, string userName)
        {
            var exists = dbContext.UserLogins.Where(e => e.EmailID == email && e.LoginID == userName).FirstOrDefault();
            if(exists != null)
            {
                dbContext.Dispose();
                return true;
            }
            dbContext.Dispose();
            return false;
        }

        bool IAdmin.ResetPassword(string userName, string password)
        {
            var isUser = dbContext.UserLogins.Where(e => e.LoginID == userName).FirstOrDefault();
            if(isUser != null)
            {
                isUser.Password = password;
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