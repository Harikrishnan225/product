import { FormEvent, useEffect, useState } from "react";
import { ProductForm } from "../../services/ProductService/ProductTypes";
import { createProduct } from "../../services/ProductService/ProductService";
import { useNavigate } from "react-router-dom";

function Products() {
  const [productForm, setProductForm] = useState<ProductForm>({
    name: "",
    qtytype: "",
    qty: "",
    price: "",
    gst:"",
    imageurl: null,
  });
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const hasEmptyFields = Object.values(productForm).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasEmptyFields);
  }, [productForm]);

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setProductForm({
        ...productForm,
        [name]: files[0],
      });

      return;
    }
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(productForm);

      const formData = new FormData();
      formData.append("name", productForm.name);
      formData.append("qtyType", productForm.qtytype);
      formData.append("size", productForm.price);
      formData.append("size", productForm.gst);
      if (productForm.imageurl) {
        formData.append("image", productForm.imageurl);
      }

      await createProduct(formData);
      navigate(`/productslist`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container col-md-4 col-12 mt-3">
      <h2 className="mt-1">Product</h2>
      <form onSubmit={handleSubmit}>
        {/* productname */}
        <div className="form-group">
          <label htmlFor="productName" className="d-flex">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            id="productName"
            className="form-control mb-3"
            value={productForm.name}
            onChange={handleChange}
          />
        </div>

        {/* productqtyType */}
        <div className="d-flex col-md-12 col-12">
          <div className="form-group col-md-6 me-1">
            <label htmlFor="productqtyType" className="d-flex">
              Qty Type:
            </label>
            <select
              name="qtytype"
              id="productqtyType"
              className="form-select"
              value={productForm.qtytype}
              onChange={handleChange}
            >
              <option selected>Select Qty Type</option>
              <option value="grams">Grams</option>
              <option value="liters">Liters</option>
              <option value="packets">Packets</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="productqtyType" className="d-flex">
              Qty:
            </label>
            <input
              type="text"
              name="qtytype"
              id="productqtyType"
              className="form-control mb-3"
              value={productForm.qty}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex col-md-12 col-12">
          <div className="form-group col-md-6 me-1">
            <label htmlFor="productsize" className="d-flex">
              Price:
            </label>
            <input
              type="text"
              name="size"
              id="productsize"
              className="form-control mb-3"
              value={productForm.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="productsize" className="d-flex">
              GST:
            </label>
            <input
              type="text"
              name="size"
              id="productsize"
              className="form-control mb-3"
              value={productForm.gst}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="productimageURL" className="d-flex">
            Image:
          </label>
          <input
            type="file"
            name="imageUrl"
            id="productimageURL"
            className="form-control mb-3"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success mt-3"
          disabled={!isFormValid}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Products;
