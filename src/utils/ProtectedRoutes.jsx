import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({children}) {

   const {userAuthenticated} = useSelector((state)=>(state.userState))

    if (userAuthenticated == false) {
         return <Navigate to={"/login"} />
    }
    
    return(
        <>
        {children}
        </>
    )
}

export default ProtectedRoutes;