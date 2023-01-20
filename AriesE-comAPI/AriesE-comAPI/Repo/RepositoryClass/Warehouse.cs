using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Repo.RepositoryClass
{
    public class Warehouse : IWarehouse
    {
        AriesEcommerceEntities dbContext = new AriesEcommerceEntities();
        bool? IWarehouse.RegisterWh(UserLoginModel newRegister)
        {
            var userExists = dbContext.UserLogins.Where(e => e.ID == newRegister.ID).FirstOrDefault();
            if(userExists == null)
            {
                dbContext.UserLogins.Add(new AriesE_comAPI.UserLogin
                {
                    DateInserted = newRegister.DateInserted,
                    ID = newRegister.ID,
                    UserTypeID = newRegister.UserTypeID,
                    MemberID = newRegister.MemberID,
                    FirstName = newRegister.FirstName,
                    LastName = newRegister.LastName,
                    LoginID = newRegister.LoginID,
                    EmailID = newRegister.EmailID,
                    Password = newRegister.Password,
                    FirmName = newRegister.FirmName,
                    PhoneNumber = newRegister.PhoneNumber,
                    SecurityAnswer = newRegister.SecurityAnswer
                });
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        bool? IWarehouse.AddStock(ProductsModel newStock)
        {
            if(newStock != null)
            {
                dbContext.Products.Add(new Product
                {
                    ID = newStock.ID,
                    DateInserted = newStock.DateInserted,
                    MARKETID = newStock.MARKETID,
                    Description = newStock.Description,
                    ExpirationDate = newStock.ExpirationDate,
                    ImageURL = newStock.ImageURL,
                    Name = newStock.Name,
                    Weight = newStock.Weight,
                    TaxPrice = newStock.TaxPrice,
                    ProductID = newStock.ProductID,
                    ProductCategoryID = newStock.ProductCategoryID,
                    UnitPrice = newStock.UnitPrice,
                    MinimumOrderDty = newStock.MinimumOrderDty
                });
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        bool IWarehouse.AddStockInvent(ProductAvailModel productQty)
        {
            if(productQty != null){
                dbContext.ProductAvailabilities.Add(new ProductAvailability
                {
                    ProductID = productQty.ProductID,
                    InventoryQuantity = productQty.InventoryQuantity
                });
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        int IWarehouse.GetProductQuantity(int productID)
        {
            var productQty = dbContext.ProductAvailabilities.Where(e => e.ProductID == productID).FirstOrDefault();
            if(productQty != null)
            {
                return productQty.InventoryQuantity;  
            }
            return 0;
        }

        bool IWarehouse.UpdateStock(ProductsModel product)
        {
            var productExists = dbContext.Products.Where(e => e.ProductID == product.ProductID).FirstOrDefault();
            if(productExists != null)
            {
                productExists.ImageURL = product.ImageURL;
                productExists.UnitPrice = product.UnitPrice;
                var productInQty = dbContext.ProductAvailabilities.Where(e => e.ProductID == product.ProductID).FirstOrDefault();
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        bool IWarehouse.UpdateQuantity(ProductAvailModel productQty)
        {
            var exists = dbContext.ProductAvailabilities.Where(e => e.ProductID == productQty.ProductID).FirstOrDefault();
            if (exists != null)
            {
                exists.InventoryQuantity = productQty.InventoryQuantity;
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        bool IWarehouse.DispatchOrder(int orderID)
        {
            var isOrder = dbContext.Orders.Where(e => e.OrderID == orderID).FirstOrDefault();
            if(isOrder != null)
            {
                isOrder.OrderStatus = "Dispatched";
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        List<UserLoginModel> IWarehouse.GetAllEmployees()
        {
            var emps = dbContext.UserLogins.Select(emp => new UserLoginModel()
            {
                ID = emp.ID,
                UserTypeID = emp.UserTypeID,
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                EmailID = emp.EmailID,
                IsActive = emp.IsActive,
            }).ToList<UserLoginModel>();
            return emps;
        }

        bool IWarehouse.BlockEmployee(int id)
        {
            var isUser = dbContext.UserLogins.Where(e => e.ID == id).FirstOrDefault();
            if(isUser != null)
            {
                isUser.IsActive = !isUser.IsActive;
                dbContext.SaveChanges();
                dbContext.Dispose();
                return true;
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        bool IWarehouse.AddDistStock(DistStockModel distDtock)
        {
            var exists = dbContext.DistributorStocks.Where(e => e.ProductID == distDtock.ProductID).FirstOrDefault();
            if(exists == null)
            {
                dbContext.DistributorStocks.Add(new DistributorStock
                {
                    ProductID = distDtock.ProductID,
                    ProductName = distDtock.ProductName,
                    UnitPrice = distDtock.UnitPrice,
                    Quantity = distDtock.Quantity,
                    DistributerID = distDtock.DistributerID
                });
                dbContext.SaveChanges();
                dbContext.Dispose();
            } else
            {
                exists.Quantity = exists.Quantity + distDtock.Quantity;
                dbContext.SaveChanges();
                dbContext.Dispose();
            }
            return true;
        }
    }
}