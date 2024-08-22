import React, { useEffect, useState } from "react";

function SupplierEdit() {
  const [supplierEditForm, setSupplierEditForm] = useState({
    name: "",
    address: "",
    GSTN: "",
    products: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const hasEmptyFields = Object.values(supplierEditForm).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasEmptyFields);
  }, [supplierEditForm]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSupplierEditForm({
      ...supplierEditForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefalut();
    try{

    }catch(error){
      
    }
  };
  return (
    <div className="container mt-3 col-md-3 col-12">
      <h2>Supplier Edit</h2>
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
            value={supplierEditForm.name}
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
            value={supplierEditForm.address}
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
            value={supplierEditForm.GSTN}
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
            value={supplierEditForm.products}
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
            value={supplierEditForm.products}
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

export default SupplierEdit;
