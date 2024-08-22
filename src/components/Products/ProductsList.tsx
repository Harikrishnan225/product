import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getProduct,
  deleteProduct,
} from "../../services/ProductService/ProductService";

interface Product {
  id: number;
  name: string;
  qtytype: string;
  size: string;
  imageurl: string;
}

function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await getProduct();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/products" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add Products
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Size/QtyType</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    {product.size}({product.qtytype})
                  </td>
                  <td>
                    {product.imageurl ? (
                      <img
                        src={product.imageurl}
                        alt={product.name}
                        style={{ width: "50px", height: "auto" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    {
                      <>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleEdit(product.id)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i className="bi bi-trash me-2"></i>
                          Delete
                        </button>
                      </>
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
