import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSupplier } from "../../services/Supplier/Supplier";
// import { SupplierType } from "../../services/Supplier/SupplierTypes";

function Supplier() {
  const [supplierForm, setSupplier] = useState({
    id: "",
    name: "",
    address: "",
    gstn: "",
    products: [],
  });
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const hasFormEmptyFields = Object.values(supplierForm).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasFormEmptyFields);
  }, [supplierForm]);

  const handleChange = (e: any) => {
    console.log("change:", e);

    const { name, value } = e.target;
    setSupplier({
      ...supplierForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const convertToNumber = () => {
        const data = Object.entries(supplierForm).map(([k, v]) => [k, +v]);
        return Object.fromEntries(data);
      };
      await createSupplier(convertToNumber());
      navigate("/supplierlist");
    } catch (error) {
      console.log("Supplier creating", error);
    }
  };
  return (
    <div className="container mt-3 col-md-3 col-12">
      <h2>Supplier</h2>
      {/* suppliername */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="suppliername" className="d-flex">
            Supplier Name:
          </label>
          <input
            type="text"
            name="suppliername"
            id="suppliername"
            className="form-control mb-3"
            value={supplierForm.name}
            onChange={handleChange}
          />
        </div>
        {/* address */}
        <div>
          <label htmlFor="address" className="d-flex">
            Address:
          </label>
          <textarea
            name="address"
            id="address"
            className="form-control mb-3"
            value={supplierForm.address}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* GSTN */}
        <div>
          <label htmlFor="gstn" className="d-flex">
            GSTN:
          </label>
          <input
            type="text"
            name="gstn"
            id="gstn"
            className="form-control mb-3"
            value={supplierForm.gstn}
            onChange={handleChange}
          />
        </div>
        {/* products */}
        <div>
          <label htmlFor="products" className="d-flex">
            Products:
          </label>
          <input
            type="text"
            name="products"
            id="products"
            className="form-control mb-3"
            value={supplierForm.products}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="products" className="d-flex">
            Products:
          </label>
          <input
            type="text"
            name="products"
            id="products"
            className="form-control mb-3"
            value={supplierForm.products}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Supplier;
