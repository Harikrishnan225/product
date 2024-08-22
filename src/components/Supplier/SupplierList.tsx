import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Supplier } from "../../services/Supplier/SupplierTypes";
import { getSupplier } from "../../services/Supplier/Supplier";
import { deleteSalesLedger } from "../../services/SalesLedger/SalesLedger";

function SupplierList() {
  const [supplier, setSupplier] = useState<Supplier[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getSupplier();
      setSupplier(data);
    };
    getData();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/supplier/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you want to delete the supplier list")) {
      try {
        await deleteSalesLedger(id);
        setSupplier(supplier.filter((item) => item.id !== id));
      } catch (error) {}
    }
  };

  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/supplier" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add Supplier
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Gstin</th>
              <th scope="col">Products</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supplier.length > 0 ? (
              supplier.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.id}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.gstn}</td>
                  <td>{supplier.address}</td>
                  <td>
                    <ul className="list-unstyled">
                      {supplier.products && supplier.products.length > 0 ? (
                        supplier.products.map((product, index) => (
                          <li>
                            {product.name}
                            {product.price}
                            {product.qtytype}
                          </li>
                        ))
                      ) : (
                        <li>No Products Found</li>
                      )}
                    </ul>
                  </td>
                  <td>
                    {
                      <>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleEdit(supplier.id)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(supplier.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </>
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No SupplierList Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierList;
