import { useState } from "react";

function Stock() {
  const [stockForm, setStockForm] = useState({
    productId: "",
    stockCount: "",
  });

  const handleChanges = () => {};
  return (
    <div className="container col-md-4 col-12 mt-3">
      <h2>Stock</h2>
      <form>
        <div className="form-group">
          {/* productId */}
          <label htmlFor="productId" className="d-flex">
            Product Id:
          </label>
          <input
            type="text"
            name="productId"
            id="productId"
            className="form-control mb-3"
            value={stockForm.productId}
            onChange={handleChanges}
          />
        </div>

        {/* stockcount */}
        <div>
          <label htmlFor="stockcount" className="d-flex">
            Stock Count:
          </label>
          <input
            type="text"
            name="stockcount"
            id="stockcount"
            className="form-control mb-3"
            value={stockForm.stockCount}
            onChange={handleChanges}
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Stock;
