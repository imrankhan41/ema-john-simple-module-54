import { useContext } from "react"
import { authContext } from "../components/context/Authprovider"


const useAuth =()=>{
    return useContext(authContext)
}
export default useAuth;