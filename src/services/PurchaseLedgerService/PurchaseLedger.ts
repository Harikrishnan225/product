import axios from "axios";
import { PurchaseLedger } from "./PurchaseLedgerTypes";

const API_URL = "http://localhost:5000/api";

export async function createPurchaseLedger(data: PurchaseLedger) {
    try {
        const res = await axios.post(`${API_URL}/purchase`, data);
        return res.data;
    } catch (error) {
        console.log("Error loading PurchaseLedger", error);
        return []
    }
}

export async function getPurchaseLedger() {
    try {
      const res = await axios.get(`${API_URL}/purchases`);
      return res.data;
    } catch (error) {
      console.log("Error fetching PurchaseLedger:",error);
      return [];
    }
  }
  
  export async function getPurchaseLedgerById() {
    try {
      const res = await axios.get(`${API_URL}/purchases/:id`);
      return res.data;
    } catch (error) {
      console.log("Error fetching PurchaseLedger:",error);
      return [];
    }
  }
  
  export async function updatePurchaseLedger(id: number,data: PurchaseLedger) {
    try {
      const editRes = await axios.put(`${API_URL}/purchase/${id}`, data);
      return editRes.data;
    } catch (error) {
      console.log("Error editing PurchaseLedger:",error);
      return [];
    }
  }
  
  
  export async function deletePurchaseLedger(id: number) {
    try {
      const deleteRes = await axios.delete(`${API_URL}/purchases/${id}`);
      return deleteRes.data;
    } catch (error) {
      console.log("Error delete PurchaseLedger:",error);
      return [];
    }
  }