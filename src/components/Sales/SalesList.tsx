import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SalesItem } from "../../services/Sales/SalesTypes";
import { deleteSalesItem, getSalesItem } from "../../services/Sales/Sales";

function SalesList() {
  const [saleslist, setSalesList] = useState<SalesItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSalesDataList = async () => {
      const data = await getSalesItem();
      setSalesList(data);
    };
    getSalesDataList();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/sales/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure want to delete this sales")) {
      try {
        await deleteSalesItem(id);
        setSalesList(saleslist.filter((sales) => sales.product_id !== id));
      } catch (error) {
        console.log("Error Deleting Sales:", error);
      }
    }
  };
  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to={"/sales"} className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add Sales
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">SalesId</th>
              <th scope="col">ProductId</th>
              <th scope="col">Qty</th>
              <th scope="col">GST</th>
              <th scope="col">Total</th>
              <th scope="col">Discount</th>
              <th scope="col">SubTotal</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {saleslist.length > 0 ? (
              saleslist.map((saleslist) => (
                <tr key={saleslist.product_id}>
                  <td>{saleslist.id}</td>
                  <td>{saleslist.sales_ledger_id}</td>
                  <td>{saleslist.product_id}</td>
                  <td>{saleslist.qty}</td>
                  <td>{saleslist.gst}</td>
                  <td>{saleslist.total}</td>
                  <td>{saleslist.discount}</td>
                  <td>{saleslist.subtotal}</td>
                  <td>
                    {
                      <>
                      <button
                        className="btn btn-primary me-3"
                        onClick={() => handleEdit(
                          saleslist.sales_ledger_id
                        )}
                      >
                        <i className="bi bi-pencil me-2"></i>Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(
                          saleslist.sales_ledger_id
                        )}
                      >
                        <i className="bi bi-trash me-2"></i>Delete
                      </button>
                    </>
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center">
                  No Sales List available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesList;
