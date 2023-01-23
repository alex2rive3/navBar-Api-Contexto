import React, { useContext } from "react";
import { UserContex } from "../Context/userContext";
import styled from "styled-components";
const Nav = styled.div`
    background-color: #9840cf;
    color: #ffffff;
    padding: 6px 40px;
    display: flex;
    justify-content: flex-end;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;
const P = styled.p`
    font-size: 24px;
`;

const Navbar = () => {
    const { userName } = useContext(UserContex);
    return (
        <Nav>
            <P>Hi {userName}</P>
        </Nav>
    );
};

export default Navbar;
