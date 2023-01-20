using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Repo.RepositoryClass
{
    public class Distributer : IDistributer
    {
        AriesEcommerceEntities dbContext = new AriesEcommerceEntities();
        bool IDistributer.OrderProducts(OrdersModel order)
        {
            var exists = dbContext.Orders.Where(e => e.OrderID == order.OrderID).FirstOrDefault();
            if(exists == null)
            {
                dbContext.Orders.Add(new Order
                {
                    OrderPlacedDate = order.OrderPlacedDate,
                    OrderID = order.OrderID,
                    ProductID = order.ProductID,
                    ProductName = order.ProductName,
                    UnitPrice = order.UnitPrice,
                    Quantity = order.Quantity,
                    ShippingCost = order.ShippingCost,
                    TotalCost = order.TotalCost,
                    OrderStatus = "Pending",
                    DistributerID = order.DistributerID
                });
                var prodExists = dbContext.ProductAvailabilities.Where(e => e.ProductID == order.ProductID).FirstOrDefault();
                if (prodExists != null)
                {
                    prodExists.InventoryQuantity = prodExists.InventoryQuantity - order.Quantity;
                }
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }
        List<OrdersModel> IDistributer.GetAllOrders()
        {
            var ordersList = dbContext.Orders.Select(e => new OrdersModel()
            {
                OrderPlacedDate = e.OrderPlacedDate,
                OrderID = e.OrderID,
                ProductID = e.ProductID,
                ProductName = e.ProductName,
                UnitPrice = e.UnitPrice,
                Quantity = e.Quantity,
                ShippingCost = e.ShippingCost,
                TotalCost = e.TotalCost,
                OrderStatus = e.OrderStatus,
                DistributerID = e.DistributerID
            }).ToList<OrdersModel>();
            dbContext.Dispose();
            return ordersList;
        }

        List<DistStockModel> IDistributer.GetStock(int id)
        {
            var stock = dbContext.DistributorStocks.Where(e => e.DistributerID == id).Select(e => new DistStockModel()
            {
                ID = e.ID,
                ProductID = e.ProductID,
                ProductName = e.ProductName,
                UnitPrice = e.UnitPrice,
                Quantity = e.Quantity
            }).ToList<DistStockModel>();
            return stock;
        }

    }
}