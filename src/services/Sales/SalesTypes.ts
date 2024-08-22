export interface SalesItem {
  id: number;
  sales_ledger_id: number;
  product_id: number;
  qty: number;
  gst: number;
  total: number;
  discount: number;
  subtotal: number;
}
