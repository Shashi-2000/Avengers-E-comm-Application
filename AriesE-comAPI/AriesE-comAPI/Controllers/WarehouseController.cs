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
    public class WarehouseController : ApiController
    {
        public readonly IWarehouse iwarehouse;
        public WarehouseController(IWarehouse iwarehouse)
        {
            this.iwarehouse = iwarehouse;
        }

        [Route("api/Warehouse/register")]
        [HttpPost]
        public IHttpActionResult RegisterWh(UserLoginModel newRegister)
        {
            var registered = iwarehouse.RegisterWh(newRegister);
            if(registered == true)
            {
                return Ok(registered);
            }
            return BadRequest();
        }

        [Route("api/Warehouse/addStock")]
        [HttpPost]
        public IHttpActionResult AddStock(ProductsModel product)
        {
            var isProductAdded = iwarehouse.AddStock(product);
            if(isProductAdded == true)
            {
                return Ok(isProductAdded);
            }
            return BadRequest("Stock not updated");
        }

        [Route("api/Warehouse/addStockQty")]
        [HttpPost]
        public IHttpActionResult AddStockInvent(ProductAvailModel productQty)
        {
            var isQtyAdded = iwarehouse.AddStockInvent(productQty);
            if (isQtyAdded)
            {
                return Ok(isQtyAdded);
            }
            return BadRequest("Stock Qty not updated");
        }

        [Route("api/Warehouse/getqty/{productID}")]
        [HttpGet]
        public IHttpActionResult GetProductQuantity(int productID)
        {
            var qty = iwarehouse.GetProductQuantity(productID);
            return Ok(qty);
        }

        [Route("api/Warehouse/updateStock")]
        [HttpPost]
        public IHttpActionResult UpdateStock(ProductsModel product)
        {
            var res = iwarehouse.UpdateStock(product);
            if (res)
            {
                return Ok(res);
            }
            return BadRequest();
        }

        [Route("api/Warehouse/updateStockQty")]
        [HttpPost]
        public IHttpActionResult UpdateQuantity(ProductAvailModel productQty)
        {
            var res = iwarehouse.UpdateQuantity(productQty);
            if (res)
            {
                return Ok(res); 
            }
            return BadRequest();
        }

        [Route("api/Warehouse/dispatch/{orderID}")]
        [HttpGet]
        public IHttpActionResult DispatchOrder(int orderID)
        {
            var res = iwarehouse.DispatchOrder(orderID);
            return Ok(res);
        }

        [Route("api/Warehouse/Emps")]
        [HttpGet]
        public IHttpActionResult GetAllEmployees()
        {
            var employees = iwarehouse.GetAllEmployees();
            if(employees.Count != 0)
            {
                return Ok(employees);
            }
            return NotFound();
        }

        [Route("api/Warehouse/blockEmp/{id}")]
        [HttpGet]
        public IHttpActionResult BlockEmployee(int id)
        {
            var res = iwarehouse.BlockEmployee(id);
            if (res)
            {
                return Ok(res);
            }
            return BadRequest();
        }

        [Route("api/Warehouse/AddDistStock")]
        [HttpPost]
        public IHttpActionResult AddDistStock(DistStockModel distDtock)
        {
            var res = iwarehouse.AddDistStock(distDtock);
            if (res)
            {
                return Ok(res);
            }
            return BadRequest();
        }
    }
}
