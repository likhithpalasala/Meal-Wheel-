import User from "./User";
import UserContext from "../utils/UserContext";
import { useContext } from "react";



const About = () => {

    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="font-bold">
            <h1>About</h1>
            <h2>This  is Namaste React Series</h2>
            
            <User name={loggedInUser} />

        </div>

    );
};


export default About;