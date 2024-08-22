import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SalesLedger } from "../../services/SalesLedger/SalesLedgerTypes";
import {
  deleteSalesLedger,
  getSalesLedger,
} from "../../services/SalesLedger/SalesLedger";
import { SalesItem } from "../../services/Sales/SalesTypes";
import { getSalesItem } from "../../services/Sales/Sales";

function SalesLedgerList() {
  const [salesLedger, setSalesLedger] = useState<SalesLedger[]>([]);
  const [salesItem, setSalesList] = useState<SalesItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSalesLedgerData = async () => {
      const data = await getSalesLedger();
      setSalesLedger(data);
    };
    getSalesLedgerData();

    const getSalesItemData = async () => {
      const data = await getSalesItem();
      setSalesList(data);
    };
    getSalesItemData();
  }, [salesLedger, salesItem]);

  const handleEdit = (id: number) => {
    navigate(`/salesledger/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure want to delete the salesLedger")) {
      try {
        await deleteSalesLedger(id);
        setSalesLedger(salesLedger.filter((item) => item.id !== id));
      } catch (error) {
        console.log("salesledger", error);
      }
    }
  };
  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/salesledger" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add SalesLedger
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">CustomerName</th>
              <th scope="col">Mobile</th>
              <th scope="col">Aadhar</th>
              <th scope="col">Address</th>
              <th scope="col">InvoiceDate</th>
              <th scope="col">Gstin</th>
              <th scope="col">Items</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesLedger.length > 0 ? (
              salesLedger.map((salesLedger) => (
                <tr key={salesLedger.id}>
                  <td>{salesLedger.id}</td>
                  <td>{salesLedger.customer_name}</td>
                  <td>{salesLedger.mobile}</td>
                  <td>{salesLedger.GSTN}</td>
                  <td>{salesLedger.adhar}</td>
                  <td>{salesLedger.address}</td>
                  <td>
                    {salesLedger.invoiceDate
                      ? new Date(salesLedger.invoiceDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>
                    <table className="table table-bordered">
                      <thead>
                      <tr>
                              <th>Id</th>
                              <th>Sales Ledger Id</th>
                              <th>Product Id</th>
                              <th>Qty</th>
                              <th>GST</th>
                              <th>Total</th>
                              <th>Discount</th>
                              <th>Subtotal</th>
                            </tr>
                      </thead>
                      <tbody>
                        {salesItem.length > 0 ? (
                          salesItem.map((sales) => (
                            <tr>
                              <td>{sales.id}</td>
                            <td>{sales.sales_ledger_id}</td>
                            <td>{sales.product_id}</td>
                            <td>{sales.qty}</td>
                            <td>{sales.gst}</td>
                            <td>{sales.total}</td>
                            <td>{sales.discount}</td>
                            <td>{sales.subtotal}</td>
                          </tr>
                          ))
                        ) : (
                          <tr>
                            <td></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {
                      <>
                        <button
                          className="btn btn-primary mb-2"
                          onClick={() => handleEdit(salesLedger.id)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(salesLedger.id)}
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
                <td colSpan={10} className="text-center">
                  No SalesLedger Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesLedgerList;
