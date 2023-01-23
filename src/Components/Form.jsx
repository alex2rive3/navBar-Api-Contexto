import React, { useContext } from "react";
import { UserContex } from "../Context/userContext";
import styled from "styled-components";
const Input = styled.input`
    padding: 10px 20px;
    background-color: #e4e4e4;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 20px 0px;
`;
const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin: 20px 10px;
`;

const Form = () => {
    const { userName, setUserName } = useContext(UserContex);
    const handleChange = ({ target }) => {
        setUserName(target.value);
    };
    return (
        <div>
            <Label htmlFor="userName">Your Name</Label>
            <Input
                type="text"
                name="userName"
                id=""
                onChange={handleChange}
                autoComplete="off"
                value={userName}
            />
        </div>
    );
};

export default Form;
