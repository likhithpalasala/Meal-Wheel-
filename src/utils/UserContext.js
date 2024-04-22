import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Logged-Out",
});


export default UserContext;