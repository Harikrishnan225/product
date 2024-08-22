import React, { useState } from "react";


function PurchaseItemsEdit() {
const [productItems, setProductItems] = useState({
  purchaseLedgerId: "",
  productId: "",
  qty: "",
  GST: "",
  total: "",
  discount: "",
  subtotal: "",
});

const handleChange = (e: any) => {
  const { name, value } = e.target;
  setProductItems({
    ...productItems,
    [name]: value,
  });
};

const handleSubmit = (e: any) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("purchaseLedgerId", productItems.purchaseLedgerId);
    formData.append("productId", productItems.productId);
    formData.append("qty", productItems.qty);
    formData.append("GST", productItems.GST);
    formData.append("total", productItems.total);
    formData.append("discount", productItems.discount);
    formData.append("subtotal", productItems.subtotal);
  } catch (error) {
    console.log(error);
  }
  console.log(productItems);
};

  return (
    <div className="container col-12 col-md-4">
      <h2>Purchase Edit Items</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productpurchaseledgerId" className="d-flex">
            Purchase LedgerId:
          </label>
          <input
            type="text"
            name="purchaseLedgerId"
            id="productpurchaseledgerId"
            className="form-control mb-3"
            value={productItems.purchaseLedgerId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productid" className="d-flex">
            ProductId:
          </label>
          <input
            type="text"
            name="productId"
            id="productid"
            className="form-control mb-3"
            value={productItems.productId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productqty" className="d-flex">
            QTY:
          </label>
          <input
            type="text"
            name="qty"
            id="productqty"
            className="form-control mb-3"
            value={productItems.qty}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productgst" className="d-flex">
            GST:
          </label>
          <input
            type="text"
            name="GST"
            id="productgst"
            className="form-control mb-3"
            value={productItems.GST}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="producttotal" className="d-flex">
            Total:
          </label>
          <input
            type="text"
            name="total"
            id="producttotal"
            className="form-control mb-3"
            value={productItems.total}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productdiscount" className="d-flex">
            Discount:
          </label>
          <input
            type="text"
            name="discount"
            id="productdiscount"
            className="form-control mb-3"
            value={productItems.discount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productsubtotal" className="d-flex">
            Subtotal:
          </label>
          <input
            type="text"
            name="subtotal"
            id="productsubtotal"
            className="form-control"
            value={productItems.subtotal}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PurchaseItemsEdit;
