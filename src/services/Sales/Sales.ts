import axios from "axios";
import { SalesItem } from "./SalesTypes";

const API_URL = "http://localhost:5000/api";

export async function createSalesItem(data: SalesItem) {
  try {
    const res = await axios.post(`${API_URL}/sales-items`, data);
    return res.data;
  } catch (error) {
    console.log("Error loading SalesItem", error);
    return []
  }
}

export async function getSalesItem() {
  try {
    const res = await axios.get(`${API_URL}/sales-items`);
    return res.data;
  } catch (error) {
    console.log("Error fetching SalesItem:", error);
    return [];
  }
}

export async function getSalesItemById() {
  try {
    const res = await axios.get(`${API_URL}/sales-items/:id`);
    return res.data;
  } catch (error) {
    console.log("Error fetching SalesItem:", error);
    return [];
  }
}

export async function updateSalesItem(id: number, data: SalesItem) {
  try {
    const editRes = await axios.put(`${API_URL}/sales-item/${id}`, data);
    return editRes.data;
  } catch (error) {
    console.log("Error editing SalesItem:", error);
    return [];
  }
}


export async function deleteSalesItem(id: number) {
  try {
    const deleteRes = await axios.delete(`${API_URL}/sales-item/${id}`);
    return deleteRes.data;
  } catch (error) {
    console.log("Error delete SalesItem:", error);
    return [];
  }
}