import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PurchaseLedger } from "../../services/PurchaseLedgerService/PurchaseLedgerTypes";
import {
  deletePurchaseLedger,
  getPurchaseLedger,
} from "../../services/PurchaseLedgerService/PurchaseLedger";
import { PurchaseItems } from "../../services/PurchaseItemService/PurchaseItemTypes";
import { getPurchaseItem } from "../../services/PurchaseItemService/PurchaseItem";

function PurchaseLedgerList() {
  const [purchaseledger, setPurchaseLedger] = useState<PurchaseLedger[]>([]);
  const [purchaseItem, setPurchaseItem] = useState<PurchaseItems[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPurchaseLedgerItems = async () => {
      const data = await getPurchaseLedger();
      setPurchaseLedger(data);
    };

    getPurchaseLedgerItems();
  }, []);

  useEffect(() => {
    const getPurchaseItemsData = async () => {
      const data = await getPurchaseItem();
      setPurchaseItem(data);
    };

    getPurchaseItemsData();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/purchaseledger/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (
      window.confirm("Are you sure you want to delete this purchaseLedger?")
    ) {
      try {
        await deletePurchaseLedger(id);
        setPurchaseLedger(
          purchaseledger.filter((purchaseledger) => purchaseledger.id !== id)
        );
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/purchaseledger" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add PurchaseLedger
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">SupplierId</th>
              <th scope="col">InvoiceDate</th>
              <th scope="col">GSTN</th>
              <th scope="col">Purchase Items</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchaseledger.length > 0 ? (
              purchaseledger.map((purchase) => (
                <tr key={purchase.id}>
                  <td>{purchase.id}</td>
                  <td>{purchase.supplier_id}</td>
                  <td>{purchase.invoice_date}</td>
                  <td>{purchase.gstn}</td>
                  <td>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>PurchaseLedgerId</th>
                          <th>ProductId</th>
                          <th>QTY</th>
                          <th>GST</th>
                          <th>Discount</th>
                          <th>SubTotal</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {purchaseItem && purchaseItem.length > 0 ? (
                          purchaseItem.map((item) => (
                            <tr key={item.product_id}>
                              <td>{item.product_id}</td>
                              <td>{item.purchase_ledger_id}</td>
                              <td>{item.gst}</td>
                              <td>{item.qty}</td>
                              <td>{item.discount}</td>
                              <td>{item.subtotal}</td>
                              <td>{item.total}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={7}>No items available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                  <td>
                    {
                      <>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleEdit(purchase.id)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(purchase.id)}
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
                <td colSpan={6}>No Purchase Ledger Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseLedgerList;
