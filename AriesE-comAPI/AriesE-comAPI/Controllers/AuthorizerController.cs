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
    public class AuthorizerController : ApiController
    {
        public readonly IAuthorizer iAuthorizer;
        public AuthorizerController(IAuthorizer iAuthorizer)
        {
            this.iAuthorizer = iAuthorizer;
        }

        [Route("api/Authorizer/getDistributers")]
        [HttpGet]
        public IHttpActionResult GetAllDistributors()
        {
            var distList = iAuthorizer.GetAllDistributors();
            if(distList.Count == 0)
            {
                return NotFound();
            }
            return Ok(distList);
        }

        [Route("api/Authorizer/pos/{id}")]
        [HttpGet]
        public IHttpActionResult PurchaseOrders(int id)
        {
            var listofPO = iAuthorizer.PurchaseOrders(id);
            if(listofPO.Count == 0)
            {
                return NotFound();
            }
            return Ok(listofPO);
        }

        [Route("api/Authorizer/AR/{orderID}/{isAccepted}/{id}")]
        [HttpGet]
        public IHttpActionResult AcceptReject(int orderID, string isAccepted, int id)
        {
            var status = iAuthorizer.AcceptReject(orderID, isAccepted, id);
            if(status == true)
            {
                return Ok(status);
            }
            return BadRequest("Status Not Updated");
        }

        [Route("api/Authorizer/profile/{id}")]
        [HttpGet]
        public IHttpActionResult GetProfile(int id)
        {
            var profile = iAuthorizer.GetProfile(id);
            if(profile == null)
            {
                return NotFound();
            }
            return Ok(profile);
        }
    }
}
