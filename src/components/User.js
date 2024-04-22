import { useState } from "react";

const User = ({name}) => {

    
    return (
    <div className="user-card">
        
        <h2> Name: {name}</h2>
        <h3>Location: India</h3>
        <h4>Contact: @Likhith-Likkii</h4>
    </div>
)
};

export default User;