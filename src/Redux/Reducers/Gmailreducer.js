
let initialState={
user:null,
openform:false
}


const gmailreducer = (state=initialState,action)=>{
switch (action.type) {
    case 'OPEN_FORM':
        return{
            ...state,
            openform:true
        }
    case 'CLOSE_FORM':
        
        return{
            ...state,
            openform:false
        }
    case 'USER_LOGIN':
        return{
            ...state,
            user:action.payload
        }
    case 'USER_LOGOUT':
        return{
            ...state,
            user:null
        }
        

    default: return state;
}
}

export default gmailreducer; 