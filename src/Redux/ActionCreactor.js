export const showForm=()=>{

    return{
        type:'OPEN_FORM'
    }
}
export const hideForm=()=>{

    return{
        type:'CLOSE_FORM'
    }
}

export const userlogin=(user)=>{
return{
    type:'USER_LOGIN',
    payload:user
}
}

export const usersignout=()=>{
    return{
        type:'USER_LOGOUT',
    }
    }

    export const SetLoading= ()=>{
        return{
            type:'LOAD_EMAIL'
        }
    }

    export const EmailsLoaded = (emails)=>{
        return{
            type:'EMAILS_LOADED',
            payload:emails
        }
    }