import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import PurchaseLedger from "./components/PurchaseLedger/PurchaseLedger";
import PurchaseItems from "./components/PurchaseItems/PurchaseItems";
import SalesLedger from "./components/Salesledger/SalesLedger";
import Sales from "./components/Sales/Sales";
import Stock from "./components/Stock/Stock";
import Supplier from "./components/Supplier/Supplier";
import Home from "./components/Home";
import ProductsList from "./components/Products/ProductsList";
import PurchaseLedgerList from "./components/PurchaseLedger/PurchaseLedgerList";
import PurchaseItemsList from "./components/PurchaseItems/PurchaseItemsList";
import SalesLedgerList from "./components/Salesledger/SalesLedgerList";
import SalesList from "./components/Sales/SalesList";
import StockList from "./components/Stock/StockList";
import SupplierList from "./components/Supplier/SupplierList";
import ProductsEdit from "./components/Products/ProductsEdit";
import PurchaseItemsEdit from "./components/PurchaseItems/PurchaseItemsEdit";
import PurchaseLedgerEdit from "./components/PurchaseLedger/PurchaseLedgerEdit";
import SalesEdit from "./components/Sales/SalesEdit";
import SalesLedgerEdit from "./components/Salesledger/SalesLedgerEdit";
import SupplierEdit from "./components/Supplier/SupplierEdit";

function App() {
  return (
    <div className="App">
      <header>
        <Home />
        <Routes>
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/purchaseledgerlist" element={<PurchaseLedgerList />} />
          <Route path="/purchaseitemslist" element={<PurchaseItemsList />} />
          <Route path="/salesledgerlist" element={<SalesLedgerList />} />
          <Route path="/saleslist" element={<SalesList />} />
          <Route path="/stocklist" element={<StockList />} />
          <Route path="/supplierlist" element={<SupplierList />} />
          <Route path="/products" element={<Products />} />
          <Route path="/purchaseledger" element={<PurchaseLedger />} />
          <Route path="/purchaseitems" element={<PurchaseItems />} />
          <Route path="/salesledger" element={<SalesLedger />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/edit/:id" element={<ProductsEdit />} />
          <Route
            path="/purchaseitems/edit/:id"
            element={<PurchaseItemsEdit />}
          />
          <Route
            path="/purchaseledger/edit/:id"
            element={<PurchaseLedgerEdit />}
          />
          <Route path="/sales/edit/:id" element={<SalesEdit />} />
          <Route path="/salesledger/edit/:id" element={<SalesLedgerEdit />} />
          <Route path="/supplier/edit/:id" element={<SupplierEdit />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
