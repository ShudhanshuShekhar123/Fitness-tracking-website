import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';
import AdminSidebar from '../../Components/AdminParts/AdminSidebar';

const AdminUserList = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("https://fitness-track-27nw.onrender.com/admin/exercise", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      const jsonData = await response.json();
      const dataWithId = jsonData.map((row, index) => ({ ...row, id:row._id }));
      setData(dataWithId);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDelete = (id) => {
    console.log(id)
    fetch(`https://fitness-track-27nw.onrender.com/admin/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          // Handle error response
          throw new Error("Network response was not ok.");
        }
        setData(data.filter((item) => item._id !== id)); // Use _id instead of id
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'Exercise', headerName: 'Exercise',width: 400,
      renderCell: (params) => {
        return (
          <ListItem>
            <ListImage src={params.row.img} alt="image" />
            {params.row.name}
          </ListItem>
        );
      }
    },
    { field: 'duration', headerName: 'duration', width: 100 },
    {
      field: 'type',
      headerName: 'type',
      width: 150
    },
    {
      field: 'sets',
      headerName: 'sets',
      width: 150
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <EditButton primary>Edit</EditButton>
            </Link>
            <MyDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      }
    }
  ];

  return (
    <DIV>
    <AdminSidebar />
    <TheList >
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </TheList>
    </DIV>
  );
};

export default AdminUserList;

const DIV = styled.div`
display:flex
`
export const TheList = styled.div`
  flex: 4;
  height: 650px;
  width: '100%';
  margin-top:60px
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
export const ListImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  padding: 20px 20px;
  background-color: ${(props) => (props.primary ? 'DarkMagenta' : 'SeaGreen')};
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;
export const MyDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;
