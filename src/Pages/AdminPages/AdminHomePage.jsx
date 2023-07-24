import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { AdminChart } from "../../Components/AdminParts/AdminChart";
import { AdminFeatured } from "../../Components/AdminParts/AdminFeatured";


export const AdminHomePage = () => {
  const [exerciseData, setExercise] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch("https://fitness-track-27nw.onrender.com/admin/exercise", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setExercise(data); // Set exerciseData to the parsed JSON data, not res
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <HomeContainer>
      <AdminFeatured exerciseData={exerciseData} /> {/* Pass exerciseData to AdminFeatured */}
      <AdminChart data={exerciseData} title="Data Analytic" grid dataKey="students" />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  flex: 4;
  margin-top:40px
`;

