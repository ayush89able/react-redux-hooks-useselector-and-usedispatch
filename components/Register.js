import React,{useState} from 'react'
import Input from '@tds/core-input'
import Button from '@tds/core-button'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import FlexGrid from '@tds/core-flex-grid'

import {useSelector,useDispatch} from 'react-redux'
import RegisterUser from '../redux/actions/RegisterAction'
const Register = props =>{

const [state,setState]=useState({
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  mobileNumber:''
})
const[registered,setRegistered]=useState(false)
const dispatch= useDispatch()
const storeState = useSelector(state => state)


  const onSubmit =()=>{
    dispatch(RegisterUser(state))
    console.log(storeState.firstName)
    setRegistered(true)
  }

  const handleChange = e =>{
    let name=e.target.name;
    let value=e.target.value;
    setState({
      ...state,
      [name]:value
    })
  }

  const registerNewUser =()=>{
    setRegistered(false)
  }

const {Row,Col}=FlexGrid

  return(
    <>
     { registered ? 
     (
      <> 
      <Paragraph>FirstName : {storeState.firstName}</Paragraph> 
      <Paragraph>LASTNAME : {storeState.lastName}</Paragraph> 
      <Paragraph>Email : {storeState.email}</Paragraph> 
      <Paragraph>MobileNumber : {storeState.mobileNumber}</Paragraph>
      <Button onClick={registerNewUser}>Edit User</Button>
      </>
     ) : 
     (
       <FlexGrid>
       <Box vertical={2} between={2} horizontal={4}>
      <Row>
      <Col >
       <Heading level='h2'>Register</Heading>
       </Col>
      </Row>
      <Row>
      <Col xs={10}>
        <Input label='First Name' type='text' name='firstName' onChange={(e)=>handleChange(e)}/>
      </Col>
      </Row>
      <Row>
      <Col xs={10}>
        <Input label='Last Name' type='text' name='lastName' onChange={(e)=>handleChange(e)}/>
      </Col>
      </Row>
      <Row>
      <Col xs={10}>
        <Input label='Email' type='text' name='email' onChange={(e)=>handleChange(e)}/>
      </Col>
      </Row>
      <Row>
      <Col xs={10}>
        <Input label='Password' type='password' name='password' onChange={(e)=>handleChange(e)}/>
      </Col>
      </Row>
      <Row>
      <Col xs={10}>
        <Input label='Mobile Number' type='tel' name='mobileNumber' onChange={(e)=>handleChange(e)}/>
      </Col>
      </Row>
        <div style={{margin:'auto',width:'100%',marginTop:'2em'}}>
        <Button onClick={onSubmit}>Submit</Button>
        </div>
    </Box>
    </FlexGrid>
     )}
    </>
  )
}
export default Register