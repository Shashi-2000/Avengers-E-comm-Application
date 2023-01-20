using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Models
{
    public class ProductAvailModel
    {
        public int ID { get; set; }
        public int ProductID { get; set; }
        public int InventoryQuantity { get; set; }
        public Nullable<int> AllocatedQuantity { get; set; }
        public Nullable<System.DateTime> InventoryQuantityUpdatedDate { get; set; }
        public Nullable<System.DateTime> AllocatedQuantityUpdatedDate { get; set; }
    }
}