import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { AdminChart } from "../../Components/AdminParts/AdminChart";
import { AdminFeatured } from "../../Components/AdminParts/AdminFeatured";


export const AdminHomePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    
    fetch("https://fitness-palace.onrender.com/admin/exercise", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
   
    <HomeContainer>
      <AdminFeatured userData={userData} />
      <AdminChart data={userData} title="Data Analytic" grid dataKey="students" />
    </HomeContainer>
    
  );
};

const HomeContainer = styled.div`
  flex: 4;
  margin-top:40px
`;

