import React from 'react'
import { NavLink } from 'react-router-dom'

function StockList() {
  return (
<div className="container col-md-10 col-12">
      <div className="row">
        <div className="d-flex justify-content-end">
          <NavLink to="/stock" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>Add Stock
          </NavLink>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">ProductId</th>
              <th scope="col">StockCount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  )
}

export default StockList