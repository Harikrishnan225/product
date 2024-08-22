import axios from "axios";
import { Supplier } from "./SupplierTypes";

const API_URL = "http://localhost:5000/api";

export async function createSupplier(data: Supplier) {
    try {
        const res = await axios.post(`${API_URL}/addsuppliers`, data);
        return res.data;
    } catch (error) {
        console.log("Error loading Supplier", error);
        return []
    }
}

export async function getSupplier() {
    try {
      const res = await axios.get(`${API_URL}/getSupplier`);
      return res.data;
    } catch (error) {
      console.log("Error fetching Supplier:",error);
      return [];
    }
  }
  
  export async function getSupplierById() {
    try {
      const res = await axios.get(`${API_URL}/getSupplier/:id`);
      return res.data;
    } catch (error) {
      console.log("Error fetching Supplier:",error);
      return [];
    }
  }
  
  export async function updateSupplier(id: number,data: Supplier) {
    try {
      const editRes = await axios.put(`${API_URL}/supplier/${id}`, data);
      return editRes.data;
    } catch (error) {
      console.log("Error editing Supplier:",error);
      return [];
    }
  }
  
  
  export async function deleteSupplier(id: number) {
    try {
      const deleteRes = await axios.delete(`${API_URL}/supplier/${id}`);
      return deleteRes.data;
    } catch (error) {
      console.log("Error delete Supplier:",error);
      return [];
    }
  }