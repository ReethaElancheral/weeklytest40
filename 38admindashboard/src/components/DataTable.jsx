import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="data-table">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, product, price, quantity, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{product}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td className={`status ${status.toLowerCase()}`}>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
