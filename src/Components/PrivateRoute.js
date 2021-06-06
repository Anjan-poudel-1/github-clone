import { Redirect, Route } from "react-router";

function PrivateRoute ({component:Component,...rest}){

    return(
        <Route {...rest}
        render={props=>{
            return user?<Component {...props}/>:
            <Redirect to ="login"/>
        }
            
        }/>
    )
}