import { Button, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div style={{display:'flex',alignItems:'center',width:"1000px",height:'171px',marginLeft:"230px"}}>
        <div style={{width:'400px',height:'90px',color:'#5C6874',flex:'1'}}>
            <Typography style={{fontSize:'30px'}}>
                Sign up and get exclusive special deals
            </Typography>
        </div>
        <div style={{width:"100px",height:'55px',flex:'1',display:'flex',justifyContent:'flex-end'}}>
            <Button style={{color:'#FFFFFF',backgroundColor:'#1B88F4',borderRadius:'0px 12px 12px 0px'}}>Sign Up</Button>
        </div>
    </div>
  )
}

export default SignUp