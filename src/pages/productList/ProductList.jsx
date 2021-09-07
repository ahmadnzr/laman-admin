import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {

    const [data, setData] = useState(productRows)
    const handleDelete = (id) =>{
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "products",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.image} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stok",
          headerName: "Stok",
          width: 200,
        },
        {
          field: "status",
          headerName: "Status",
          width: 150,
        },
        {
          field: "price",
          headerName: "Price",
          width: 150,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
              </>
            );
          },
        },
      ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
