import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import Loader from '../../components/Loader';


const PrivetRoute = ({children}) => {
    const {user, loadingState} = useContext(AuthContext)
    const location = useLocation()
    if(loadingState){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;