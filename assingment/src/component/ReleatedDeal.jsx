import React from 'react'
import image from '../asset/187db358671328189d3da83955a6ffe9.png'
import { Box, Button, Typography } from '@mui/material'
import SignUp from './SignUp'
const ReleatedDeal = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography style={{fontSize:"32px",color:'#2C384A'}}>Related deals you might like for</Typography>
        <div style={{display:'flex',gap:'70px',marginLeft:"200px"}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{marginBottom:"50px",marginTop:'70px'}}>
            <img src={image} alt="monitor" style={{width:"141px",height:'103px'}} />
          </div>
          <div>
            <div className="deal" style={{display:'flex',gap:"15px"}}>
              <div style={{width:"79px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>20% off</Typography>
              </div>
              <div style={{width:"100px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>Limited time</Typography>
              </div>
            </div>
            <div style={{color:"#626E79"}}>
              <div className="heading" style={{display:'flex',justifyContent:'center',marginTop:"5px",marginBottom:'10px'}}>
                <Typography style={{fontWeight:'bold'}}>Webbuilder 1</Typography>
              </div>
              <div style={{width:'284px',height:'50px'}}>
                <Typography>
                Computer Modern clasic with wix support
                </Typography>
              </div>
              <div style={{display:'flex',gap:'10px',marginTop:'5px'}}> 
                <Box fontStyle={{fontSize:'20px',marginBottom:'10px'}}>$39.96</Box>
                <Box fontStyle={{color:'#9FA9B'}}>$49.96</Box>
                <Box fontStyle={{color:'#EF4C5D'}}>(20% Off)</Box>
              </div>
              <div className="btn">
                <Button style={{color:'#FFFFFF',width:"290px",backgroundColor:'#1B88F4',borderRadius:'13px'}}>View Deal</Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{marginBottom:"50px",marginTop:'70px'}}>
            <img src={image} alt="monitor" style={{width:"141px",height:'103px'}} />
          </div>
          <div>
            <div className="deal" style={{display:'flex',gap:"15px"}}>
              <div style={{width:"79px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>20% off</Typography>
              </div>
              <div style={{width:"100px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>Limited time</Typography>
              </div>
            </div>
            <div style={{color:"#626E79"}}>
              <div className="heading" style={{display:'flex',justifyContent:'center',marginTop:"5px",marginBottom:'10px'}}>
                <Typography style={{fontWeight:'bold'}}>Webbuilder 1</Typography>
              </div>
              <div style={{width:'284px',height:'50px'}}>
                <Typography>
                Computer Modern clasic with wix support
                </Typography>
              </div>
              <div style={{display:'flex',gap:'10px',marginTop:'5px'}}> 
                <Box fontStyle={{fontSize:'20px',marginBottom:'10px'}}>$39.96</Box>
                <Box fontStyle={{color:'#9FA9B'}}>$49.96</Box>
                <Box fontStyle={{color:'#EF4C5D'}}>(20% Off)</Box>
              </div>
              <div className="btn">
                <Button style={{color:'#FFFFFF',width:"290px",backgroundColor:'#1B88F4',borderRadius:'13px'}}>View Deal</Button>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{marginBottom:"50px",marginTop:'70px'}}>
            <img src={image} alt="monitor" style={{width:"141px",height:'103px'}} />
          </div>
          <div>
            <div className="deal" style={{display:'flex',gap:"15px"}}>
              <div style={{width:"79px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>20% off</Typography>
              </div>
              <div style={{width:"100px",height:"38px",borderRadius:"8px",backgroundColor:"#F2F4F7",color:'#074786',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography>Limited time</Typography>
              </div>
            </div>
            <div style={{color:"#626E79"}}>
              <div className="heading" style={{display:'flex',justifyContent:'center',marginTop:"5px",marginBottom:'10px'}}>
                <Typography style={{fontWeight:'bold'}}>Webbuilder 1</Typography>
              </div>
              <div style={{width:'284px',height:'50px'}}>
                <Typography>
                Computer Modern clasic with wix support
                </Typography>
              </div>
              <div style={{display:'flex',gap:'10px',marginTop:'5px'}}> 
                <Box fontStyle={{fontSize:'20px',marginBottom:'10px'}}>$39.96</Box>
                <Box fontStyle={{color:'#9FA9B'}}>$49.96</Box>
                <Box fontStyle={{color:'#EF4C5D'}}>(20% Off)</Box>
              </div>
              <div className="btn">
                <Button style={{color:'#FFFFFF',width:"290px",backgroundColor:'#1B88F4',borderRadius:'13px'}}>View Deal</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <SignUp/>
    </div>
  )
}

export default ReleatedDeal