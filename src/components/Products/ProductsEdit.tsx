import React, { useEffect, useState } from "react";
import { ProductForm } from "../../services/ProductService/ProductTypes";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  // updateProduct,
} from "../../services/ProductService/ProductService";

function ProductsEdit() {
  const [productEditForm, serProductEditForm] = useState<ProductForm>({
    name: "",
    qtytype: "",
    qty: "",
    price: "",
    gst: "",
    imageurl: null,
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("productid", id);

    if (id) {
      const getProductData = async () => {
        try {
          const existingProduct = await getProductById(id);
          serProductEditForm({
            name: existingProduct.name,
            qtytype: existingProduct.qtytype,
            qty: existingProduct.qty,
            price: existingProduct.price,
            gst: existingProduct.gst,
            imageurl: existingProduct.imagerurl || null,
          });
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };

      getProductData();
    } else {
      console.log("Data Error");
    }
  }, [id]);

  useEffect(() => {
    const hasEmptyFields = Object.values(productEditForm).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    setIsFormValid(!hasEmptyFields);
  }, [productEditForm]);

  const handleChange = (e: {
    target: { name: any; value: any; type: any; files: any };
  }) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      serProductEditForm({
        ...productEditForm,
        [name]: files[0],
      });

      return;
    }
    serProductEditForm({
      ...productEditForm,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", productEditForm.name);
      formData.append("qtyType", productEditForm.qtytype);
      formData.append("qty", productEditForm.qty);
      formData.append("price", productEditForm.price);
      formData.append("gst", productEditForm.gst);
      // formData.append("image", productEditForm.imageurl);
      // await updateProduct(id, formData);
      navigate(`/productslist`);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div className="container col-md-4 col-12 mt-3">
      <h2 className="mt-1">Product Edit</h2>
      <form onSubmit={handleSubmit}>
        {/* productname */}
        <div className="form-group">
          <label htmlFor="productName" className="d-flex">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="productName"
            className="form-control mb-3"
            value={productEditForm.name}
            onChange={handleChange}
          />
        </div>

        {/* productqtyType */}
      <div className="d-flex col.md-12 col-12">
      <div className="form-group col-md-6 me-1">
          <label htmlFor="productqtyType" className="d-flex">
            Qty Type:
          </label>
          <input
            type="text"
            name="qtyType"
            id="productqtyType"
            className="form-control mb-3"
            value={productEditForm.qtytype}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="productqtyType" className="d-flex">
            Qty:
          </label>
          <input
            type="text"
            name="qtyType"
            id="productqtyType"
            className="form-control mb-3"
            value={productEditForm.qty}
            onChange={handleChange}
          />
        </div>
      </div>

        <div className="d-flex col-md-12 col-12">
        <div className="form-group col-md-6 me-1">
          <label htmlFor="productsize" className="d-flex">
            Size:
          </label>
          <input
            type="text"
            name="size"
            id="productsize"
            className="form-control mb-3"
            value={productEditForm.gst}
            onChange={handleChange}
          />
        </div><div className="form-group col-md-6">
          <label htmlFor="productsize" className="d-flex">
            Size:
          </label>
          <input
            type="text"
            name="size"
            id="productsize"
            className="form-control mb-3"
            value={productEditForm.price}
            onChange={handleChange}
          />
        </div>
        </div>

        <div className="form-group">
          <label htmlFor="productimageURL" className="d-flex">
            ImageURL:
          </label>
          <input
            type="file"
            name="imageurl"
            id="productimageURL"
            className="form-control mb-3"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success my-3"
          disabled={!isFormValid}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default ProductsEdit;
