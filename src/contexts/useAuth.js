import { useContext } from "react";
import { AuthContext } from "./AuthProvider"


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;