using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AriesE_comAPI.Models
{
    public class ProductsModel
    {
        public int ID { get; set; }
        public System.DateTime DateInserted { get; set; }
        public int MARKETID { get; set; }
        public string Description { get; set; }
        public Nullable<System.DateTime> ExpirationDate { get; set; }
        public string ImageURL { get; set; }
        public string Name { get; set; }
        public Nullable<decimal> Weight { get; set; }
        public Nullable<decimal> TaxPrice { get; set; }
        public Nullable<int> ProductID { get; set; }
        public Nullable<int> ProductCategoryID { get; set; }
        public Nullable<decimal> UnitPrice { get; set; }
        public Nullable<int> MinimumOrderDty { get; set; }

    }
}