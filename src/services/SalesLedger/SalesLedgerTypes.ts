import { SalesItem } from "../Sales/SalesTypes";

export interface SalesLedger {
    id: number;
    mobile: string;
    customer_name: string;
    adhar: string;
    address: string;
    invoiceDate: Date;
    GSTN: string;
    items: SalesItem[]
  }