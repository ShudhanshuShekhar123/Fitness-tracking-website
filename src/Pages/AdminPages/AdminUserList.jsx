import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DeleteOutline } from '@material-ui/icons';
import AdminSidebar from '../../Components/AdminParts/AdminSidebar';

const AdminUserList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("https://fitness-palace.onrender.com/admin/exercise", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");

    fetch(`https://fitness-palace.onrender.com/admin/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          // Handle error response
          throw new Error("Network response was not ok.");
        }
        setData(data.filter((item) => item.id !== id));
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
