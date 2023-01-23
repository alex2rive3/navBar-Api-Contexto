import { React, useState } from "react";
import { UserContex } from "../Context/userContext";

const Wrapper = ({ children }) => {
    const [userName, setUserName] = useState("Alex Rolando");
    return (
        <UserContex.Provider value={{ userName, setUserName }}>
            {children}
        </UserContex.Provider>
    );
};

export default Wrapper;
