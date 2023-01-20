using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Repo.RepositoryClass
{
    public class Authorizer : IAuthorizer
    {
        AriesEcommerceEntities dbContext = new AriesEcommerceEntities();
        List<DistributorModel> IAuthorizer.GetAllDistributors()
        {
            var distributorsList = (from U in dbContext.UserLogins
                                    join MCP in dbContext.MemberContactPhones
                                    on U.ID equals MCP.ID
                                    join AD in dbContext.AddressDetails
                                    on U.ID equals AD.ID
                                    join DC in dbContext.DistCreditLimits
                                    on U.ID equals DC.ID
                                    select new DistributorModel()
                                    {
                                        ID = U.ID,
                                        FirstName = U.FirstName,
                                        EmailID = U.EmailID,
                                        PhoneNumber = MCP.PhoneNumber,
                                        City = AD.City,
                                        CreditLimit = DC.CreditLimit,
                                        FirmName = DC.FirmName
                                    }).ToList<DistributorModel>();
            dbContext.Dispose();
            return distributorsList;
        }

        List<PurchaseOrderModel> IAuthorizer.PurchaseOrders(int id)
        {
            var purchaseOrders = (from O in dbContext.Orders
                                  join DCL in dbContext.DistCreditLimits
                                  on O.DistributerID equals DCL.ID
                                  //join P in dbContext.Products
                                  //on O.ProductID equals P.ProductID
                                  where O.DistributerID == id
                                  select new PurchaseOrderModel()
                                  {
                                      Name = DCL.Name,
                                      CreditLimit = DCL.CreditLimit,
                                      OrderPlacedDate = O.OrderPlacedDate,
                                      OrderID = O.OrderID,
                                      ProductID = O.ProductID,
                                      ProductName = O.ProductName,
                                      //ProductCategoryID = P.ProductCategoryID,
                                      Quantity = O.Quantity,
                                      ShippingCost = O.ShippingCost,
                                      TotalCost = O.TotalCost,
                                      OrderStatus = O.OrderStatus
                                  }).ToList<PurchaseOrderModel>();
            dbContext.Dispose();
            return purchaseOrders;
        }

        bool IAuthorizer.AcceptReject(int orderID, string isAccepted, int distid)
        {
            var order = dbContext.Orders.Where(e => e.OrderID == orderID).FirstOrDefault();
            if(order != null)
            {
                if (isAccepted == "true")
                {
                    order.OrderStatus = "Accepted";
                    var orderedDist = dbContext.DistCreditLimits.Where(e => e.ID == distid).FirstOrDefault();
                    if(orderedDist != null)
                    {
                        orderedDist.CreditLimit -= order.TotalCost;
                    }
                    dbContext.SaveChanges();
                    dbContext.Dispose();
                    return true;
                }
                else
                {
                    order.OrderStatus = "Rejected";
                }
            }
            dbContext.SaveChanges();
            dbContext.Dispose();
            return false;
        }

        List<AuthorizerProfileModel> IAuthorizer.GetProfile(int id)
        {
            var profile = (from U in dbContext.UserLogins
                           join MCP in dbContext.MemberContactPhones
                           on U.ID equals MCP.ID
                           join M in dbContext.Members
                           on U.ID equals M.ID
                           where U.ID == id
                           select new AuthorizerProfileModel()
                           {
                               UserName = M.UserName,
                               FirstName = U.FirstName,
                               MiddleInitial = U.MiddleInitial,
                               LastName = U.LastName,
                               EmailID = U.EmailID,
                               PhoneNumber = MCP.PhoneNumber
                           }).ToList<AuthorizerProfileModel>();
            dbContext.Dispose();
            return profile;
        }

    }
}