import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateSalesItem } from "../../services/Sales/Sales";

function SalesEdit() {
  const [salesFormData, setSalesFormData] = useState({
    sales_ledger_id: "",
    product_id: "",
    qty: "",
    GST: "",
    total: "",
    discount: "",
    subtotal: "",
  });
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const hasEmptyFields = Object.values(salesFormData).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasEmptyFields);
  }, [salesFormData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSalesFormData({
      ...salesFormData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (id) {
      try {
        const numbericId = Number(id);
        if (!isNaN(numbericId)) {
          const convertAllToNumber = () => {
            const data = Object.entries(salesFormData).map(([k, v]) => [k, +v]);
            return Object.fromEntries(data);
          };
          await updateSalesItem(numbericId, convertAllToNumber());
          navigate(`/saleslist`);
          console.log("Form submitted:", salesFormData);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container col-md-4 col-12 mt-4">
      <h2 className="mb-4">Sales Edit Form</h2>
      <form onSubmit={handleSubmit}>
        {/* salesId */}
        <div className="form-group">
          <label htmlFor="salesId" className="d-flex">
            Sales Id:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="salesLedgerId"
            id="salesId"
            value={salesFormData.sales_ledger_id}
            onChange={handleChange}
          />
        </div>

        {/* productId */}
        <div className="form-group">
          <label htmlFor="productId" className="d-flex">
            Product Id:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="productId"
            id="productId"
            value={salesFormData.product_id}
            onChange={handleChange}
          />
        </div>

        {/* quantity */}
        <div className="form-group">
          <label htmlFor="qty" className="d-flex">
            Quantity:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            name="qty"
            value={salesFormData.qty}
            onChange={handleChange}
          />
        </div>

        {/* Gst */}
        <div className="form-group">
          <label htmlFor="GST" className="d-flex">
            GST:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="GST"
            name="GST"
            value={salesFormData.GST}
            onChange={handleChange}
          />
        </div>

        {/* Total */}
        <div className="form-group">
          <label htmlFor="total" className="d-flex">
            Total:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="total"
            name="total"
            value={salesFormData.total}
            onChange={handleChange}
          />
        </div>

        {/* Discount */}
        <div className="form-group">
          <label htmlFor="discount" className="d-flex">
            Discount:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="discount"
            name="discount"
            value={salesFormData.discount}
            onChange={handleChange}
          />
        </div>

        {/* Subtotal */}
        <div className="form-group">
          <label htmlFor="subtotal" className="d-flex">
            Subtotal:
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="subtotal"
            name="subtotal"
            value={salesFormData.subtotal}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success mt-3"
          disabled={!isFormValid}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default SalesEdit;
