import axios from "axios";
// import { ProductForm } from "./ProductTypes";

const API_URL = "http://localhost:5000/api";

export async function createProduct(data: FormData) {
  try {
    const res = await axios.post(`${API_URL}/product`, data);
    return res.data;
  } catch (error) {
    console.log("Error adding product:",error);
    return [];
  }
}

export async function getProduct() {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (error) {
    console.log("Error fetching product:",error);
    return [];
  }
}

export async function getProductById(id: any) {
  try {
    const res = await axios.get(`${API_URL}/products/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching product:",error);
    return [];
  }
}

export async function updateProduct(id: number,data: FormData) {
  try {
    const editRes = await axios.put(`${API_URL}/products/${id}`, data);
    return editRes.data;
  } catch (error) {
    console.log("Error editing product:",error);
    return [];
  }
}


export async function deleteProduct(id: number) {
  try {
    const deleteRes = await axios.delete(`${API_URL}/products/${id}`);
    return deleteRes.data;
  } catch (error) {
    console.log("Error delete product:",error);
    return [];
  }
}