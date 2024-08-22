export interface ProductForm {
  name: string;
  qtytype: string;
  qty: string;
  price: string;
  gst: string;
  imageurl: File | null;
}