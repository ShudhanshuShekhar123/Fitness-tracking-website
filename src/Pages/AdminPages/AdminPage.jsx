import React from "react";
import AdminSidebar from "../../Components/AdminParts/AdminSidebar";
import { AdminHomePage } from "./AdminHomePage";
import styled from "styled-components";

export const Adminpage = () =>{
    return (
        <DIV>
            <AdminSidebar />
            <AdminHomePage />
        </DIV>
    )
};

const DIV = styled.div`
display:flex
`