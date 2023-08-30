
import { Navigate } from 'react-router-dom'
const Privatecourse = ({isLogIn,children})=>{
  if(isLogIn){
    return children;
  }
  else{
    return <Navigate to="/courses"/>
  }
}

export default Privatecourse