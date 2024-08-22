import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"></NavLink>
          </li>
          <li>
            <NavLink to="/productslist">Product</NavLink>
          </li>
          <li>
            <NavLink to="/purchaseledgerlist">Purchase Ledger</NavLink>
          </li>
          <li>
            <NavLink to="/saleslist">Sales</NavLink>
          </li>
          <li>
            <NavLink to="/salesledgerlist">SalesLedger</NavLink>
          </li>
          <li>
            <NavLink to="/supplierlist">Supplier</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
