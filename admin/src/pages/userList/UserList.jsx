import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";
import { getUsers } from "../../redux/apiCalls";
import "./userList.css";

export default function UserList() {
  const users = useSelector((state) => state?.user?.allUsers);
  const dispatch = useDispatch();
  const [data, setData] = useState(users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "User Type",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.isAdmin ? "Admin" : "Client"}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle">Users</h1>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
