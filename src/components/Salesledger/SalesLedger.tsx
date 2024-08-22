import { useState } from "react";

function SalesLedger() {
  const [salesLedger, setSalesLedger] = useState({
    mobile: "",
    customerName: "",
    adhar: "",
    address: "",
    invoiceDate: "",
    GSTN: "",
    items: "",
  });

  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    setSalesLedger({
      ...salesLedger,
      [name]: value,
    });
  };

  const handleSubmit = () => {};
  return (
    <div className="container col-md-4 col-12 mt-3">
      <h2>Sales Ledger</h2>

      <form onSubmit={handleSubmit}>
        {/* customername */}
        <div className="form-group">
          <label htmlFor="customername" className="d-flex">
            Customer Name:
          </label>
          <input
            type="text"
            name="customername"
            id="customername"
            className="form-control mb-3"
            value={salesLedger.customerName}
            onChange={handleChanges}
          />
        </div>

        <div>
          <label htmlFor="aadharnumber" className="d-flex">
            Aadhar Number:
          </label>
          <input
            type="text"
            name="aadharnumber"
            id="aadharnumber"
            className="form-control mb-3"
            value={salesLedger.adhar}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="mobile" className="d-flex">
            Mobile:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-3"
            value={salesLedger.mobile}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="address" className="d-flex">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-3"
            value={salesLedger.address}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="invoicedate" className="d-flex">
            Invoice Date:
          </label>
          <input
            type="text"
            name="invoicedate"
            id="invoicedate"
            className="form-control mb-3"
            value={salesLedger.invoiceDate}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="gstn" className="d-flex">
            GSTN:
          </label>
          <input
            type="text"
            name="gstn"
            id="gstn"
            className="form-control mb-3"
            value={salesLedger.GSTN}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="items" className="d-flex">
            Items:
          </label>
          <input
            type="text"
            name="items"
            id="items"
            className="form-control mb-3"
            value={salesLedger.items}
            onChange={handleChanges}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SalesLedger;
