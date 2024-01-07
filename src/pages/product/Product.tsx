import { useState } from "react";
import "./product.scss";
import DataTable from "../../components/DataTable/DataTable";
import Add from "../../components/add/Add";
const Product = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={userRows} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Product