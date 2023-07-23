import React, { useState } from 'react';
import styled from "styled-components";
import AdminSidebar from '../../Components/AdminParts/AdminSidebar';

const AdminNewUser = () => {
    const [Exercisedata, setExercisedata] = useState({
      name: "",
      description: "",
      duration: "",
      sets: "",
      repetition: "",
      type: "",
      img: "",
      video: "",
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setExercisedata({
        ...Exercisedata,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      // Make the API call to add the new exercise data to the database
      fetch("https://fitness-palace.onrender.com/admin/addexercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(Exercisedata),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("API response:", res);
          setExercisedata({
            name: "",
            description: "",
            duration: "",
            sets: "",
            repetition: "",
            type: "",
            img: "",
            video: "",
          });
        })
        .catch((err) => console.log(err));
    };

    return (
        <DIV>
            <AdminSidebar />
        <TheList>
            <h1>New Exercise</h1>
            <UserForm onSubmit={handleSubmit}>
                <UserItem>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="name" value={Exercisedata.name} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Description</label>
                    <input type="text" placeholder="Description" name='description' value={Exercisedata.description} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Duration of time</label>
                    <input type="number" placeholder="Duration" name='duration' value={Exercisedata.duration} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Number Of Sets</label>
                    <input type="number" placeholder="Sets" name='sets' value={Exercisedata.sets} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Total Repetition</label>
                    <input type="number" placeholder="Repetition" name='repetition' value={Exercisedata.repetition} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Type Of Exercise</label>
                    <input type="text" placeholder="Type" name='type' value={Exercisedata.type} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Images</label>
                    <input type="text" placeholder="Images" name='img' value={Exercisedata.img} onChange={handleInputChange} />
                </UserItem>
                <UserItem>
                    <label>Video</label>
                    <input type="text" placeholder="Video" name='video' value={Exercisedata.video} onChange={handleInputChange} />
                </UserItem>

                <UserButton type='submit'>Create</UserButton>
            </UserForm>
        </TheList>
        </DIV>
    )
};
export default AdminNewUser;

const DIV = styled.div`
display:flex
`

export const TheList = styled.div`
    flex: 4;
    margin-top:60px;
`
const UserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const UserItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
    label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: rgb(151, 150, 150);
    }
    input {
        height: 20px;
        padding: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        color:black
    }
    select{
        height: 40px;
        border-radius: 5px;
    }
`
const UserButton = styled.button`
    width: 200px;
    border: none;
    background-color: #1876F2;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`