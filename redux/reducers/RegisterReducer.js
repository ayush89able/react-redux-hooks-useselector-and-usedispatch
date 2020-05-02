const initialState={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  mobileNumber:''
}

export default function RegisterReducer(state=initialState,action){
  console.log(action)
  console.log(state)
  switch(action.type){
    case 'REGISTER':
    return{
        firstName:action.payload.firstName,
        lastName:action.payload.lastName,
        email:action.payload.email,
        password:action.payload.password,
        mobileNumber:action.payload.mobileNumber,
    }
    default:
    return state
  }
}