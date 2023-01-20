using AriesE_comAPI.Models;
using AriesE_comAPI.Repo.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AriesE_comAPI.Controllers
{
    [EnableCors(headers : "*", methods : "*", origins : "*")]
    public class DistributerController : ApiController
    {
        public readonly IDistributer iDistributer;
        public DistributerController(IDistributer iDistributer)
        {
            this.iDistributer = iDistributer;
        }

        [Route("api/Distributer/Order")]
        [HttpPost]
        public HttpResponseMessage OrderProducts(OrdersModel order)
        {
            var res = iDistributer.OrderProducts(order);
            if (res)
            {
                return Request.CreateResponse(HttpStatusCode.OK, res);
            }
            return Request.CreateResponse(HttpStatusCode.BadRequest, "Order Already exists");
        }

        [Route("api/Distributer/getOrders")]
        public HttpResponseMessage GetAllOrders()
        {
            var ordersList = iDistributer.GetAllOrders();
            if(ordersList.Count == 0)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "No Data Found");
            }
            return Request.CreateResponse(HttpStatusCode.OK, ordersList);
        }

        [Route("api/Distributer/stock/{id}")]
        [HttpGet]
        public IHttpActionResult GetStock(int id)
        {
            var stockList = iDistributer.GetStock(id);
            if(stockList.Count != 0)
            {
                return Ok(stockList);
            }
            return NotFound();
        }
    }
}
