import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPurchaseLedger } from "../../services/PurchaseLedgerService/PurchaseLedger";

function PurchaseLedger() {
  const [purchaseledger, setPurchaseLedger] = useState({
    supplierId: "",
    invoiceDate: "",
    GSTN: "",
  });

  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const hasEmptyFields = Object.values(purchaseledger).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasEmptyFields);
  }, [purchaseledger]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPurchaseLedger({
      ...purchaseledger,
      [name]: value,
    });
  };

  const convertValueToNumber = () => {
    const outputData = Object.entries(purchaseledger).map(([key, value]) => [
      key,
      +value,
    ]);
    if (true) {
      return Object.fromEntries(outputData);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createPurchaseLedger(convertValueToNumber());
    navigate(`/purchaseledgerlist`);
  };

  return (
    <div className="container col-md-4 col-12 mt-3">
      <h2>Product Ledger Form</h2>
      <form onSubmit={handleSubmit}>
        {/* supplierId */}
        <div className="form-group">
          <label htmlFor="supplierid" className="d-flex mb-3">
            SupplierId:
          </label>
          <input
            type="text"
            name="supplierId"
            id="supplierid"
            className="form-control"
            value={purchaseledger.supplierId}
            onChange={handleChange}
          />
        </div>

        {/* invoicedate */}
        <div className="form-group">
          <label htmlFor="invoicedate" className="d-flex mb-3">
            Invoice Date:
          </label>
          <input
            type="text"
            name="invoiceDate"
            id="invoicedate"
            className="form-control"
            value={purchaseledger.invoiceDate}
            onChange={handleChange}
          />
        </div>

        {/* gstin */}
        <div className="form-group">
          <label htmlFor="gstin" className="d-flex mb-3">
            GSTIN:
          </label>
          <input
            type="text"
            name="GSTN"
            id="gstin"
            className="form-control"
            value={purchaseledger.GSTN}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PurchaseLedger;
