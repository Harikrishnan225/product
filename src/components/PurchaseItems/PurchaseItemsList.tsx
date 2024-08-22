import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PurchaseItems } from "../../services/PurchaseItemService/PurchaseItemTypes";
import {
  deletePurchaseItem,
  getPurchaseItem,
} from "../../services/PurchaseItemService/PurchaseItem";

function PurchaseItemsList() {
  const [purchaseitemslist, setPurchaseItemsList] = useState<PurchaseItems[]>(
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const getPurchaseItemList = async () => {
      const data = await getPurchaseItem();
      setPurchaseItemsList(data);
    };

    getPurchaseItemList();
  }, []);

  const handleEdit = (id: number) => {
    navigate(`/purchaseitems/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this purchaseItem?")) {
      try {
        await deletePurchaseItem(id);
        setPurchaseItemsList(
          purchaseitemslist.filter(
            (purchaseItem) => purchaseItem.purchaseLedgerId !== id
          )
        );
      } catch (error) {}
    }
  };
  return (
    <div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/purchaseitems" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add PurchaseItems
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">PurchaseLedgerId</th>
              <th scope="col">ProductId</th>
              <th scope="col">Qty</th>
              <th scope="col">Gst</th>
              <th scope="col">Total</th>
              <th scope="col">Discount</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchaseitemslist.length > 0 ? (
              purchaseitemslist.map((purchaseitemslist) => (
                <tr key={purchaseitemslist.purchaseLedgerId}>
                  <td>{purchaseitemslist.purchaseLedgerId}</td>
                  <td>{purchaseitemslist.productId}</td>
                  <td>{purchaseitemslist.GST}</td>
                  <td>{purchaseitemslist.qty}</td>
                  <td>{purchaseitemslist.discount}</td>
                  <td>{purchaseitemslist.subtotal}</td>
                  <td>{purchaseitemslist.total}</td>
                  <td>
                    {
                      <>
                        <button
                          className="btn btn-primary me-3"
                          onClick={() => handleEdit(
                            purchaseitemslist.purchaseLedgerId
                          )}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(
                            purchaseitemslist.purchaseLedgerId
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
                <td colSpan={9}>No purchase available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchaseItemsList;
