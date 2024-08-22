import axios from "axios";
import { SalesLedger } from "./SalesLedgerTypes";

const API_URL = "http://localhost:5000/api";

export async function createSalesLedger(data: SalesLedger) {
    try {
        const res = await axios.post(`${API_URL}/sales-ledger`, data);
        return res.data;
    } catch (error) {
        console.log("Error loading SalesLedger", error);
        return []
    }
}

export async function getSalesLedger() {
    try {
      const res = await axios.get(`${API_URL}/sales-ledgers`);
      return res.data;
    } catch (error) {
      console.log("Error fetching SalesLedger:",error);
      return [];
    }
  }
  
  export async function getSalesLedgerById() {
    try {
      const res = await axios.get(`${API_URL}/sales-ledger/:id`);
      return res.data;
    } catch (error) {
      console.log("Error fetching SalesLedger:",error);
      return [];
    }
  }
  
  export async function updateSalesLedger(id: number,data: SalesLedger) {
    try {
      const editRes = await axios.put(`${API_URL}/sales-ledger/${id}`, data);
      return editRes.data;
    } catch (error) {
      console.log("Error editing SalesLedger:",error);
      return [];
    }
  }
  
  
  export async function deleteSalesLedger(id: number) {
    try {
      const deleteRes = await axios.delete(`${API_URL}/sales-ledger/${id}`);
      return deleteRes.data;
    } catch (error) {
      console.log("Error delete SalesLedger:",error);
      return [];
    }
  }