import axios from "axios";
import { PurchaseItems } from "./PurchaseItemTypes";

const API_URL = "http://localhost:5000/api";

export async function createPurchaseItem(data: PurchaseItems) {
    try {
        const res = await axios.post(`${API_URL}/purchase-items`, data);
        return res.data;
    } catch (error) {
        console.log("Error loading purchaseitem", error);
        return []
    }
}

export async function getPurchaseItem() {
    try {
      const res = await axios.get(`${API_URL}/purchase-items`);
      return res.data;
    } catch (error) {
      console.log("Error fetching PurchaseItem:",error);
      return [];
    }
  }
  
  export async function getPurchaseItemById() {
    try {
      const res = await axios.get(`${API_URL}/purchase-items/:id`);
      return res.data;
    } catch (error) {
      console.log("Error fetching PurchaseItem:",error);
      return [];
    }
  }
  
  export async function updatePurchaseItem(id: number,data: PurchaseItems) {
    try {
      const editRes = await axios.put(`${API_URL}/purchase-item/${id}`, data);
      return editRes.data;
    } catch (error) {
      console.log("Error editing PurchaseItem:",error);
      return [];
    }
  }
  
  
  export async function deletePurchaseItem(id: number) {
    try {
      const deleteRes = await axios.delete(`${API_URL}/purchase-item/${id}`);
      return deleteRes.data;
    } catch (error) {
      console.log("Error delete PurchaseItem:",error);
      return [];
    }
  }