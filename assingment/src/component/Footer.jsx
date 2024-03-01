import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{width:'100%', backgroundColor:'#212731',height:'350px',display:'flex',justifyContent:'center'}}>
        <div style={{width:'75%',height:'350px',display:'flex',justifyContent:'center'}}>
            <div style={{color:'#B6BDC4',width:'660px',display:'flex',justifyContent:'space-between'}}>
                <div style={{marginTop:'20px',display:"flex",flexDirection:'column',gap:'15px'}}>
                    <Typography style={{color:'#FFFFFF',fontSize:'16px'}}>
                        CATEGORIES
                    </Typography>
                    <Typography>Hosting</Typography>
                    <Typography>Data Center</Typography>
                    <Typography>Robotic-Automation</Typography>
                </div>
                <div style={{marginTop:'20px',display:"flex",flexDirection:'column',gap:'15px',marginRight:'100px'}}>
                    <Typography style={{color:'#FFFFFF',fontSize:'16px'}}>
                        CONTACT
                    </Typography>
                    <Typography>Contact</Typography>
                    <Typography>Privacy Policy</Typography>
                    <Typography>Terms Of Service</Typography>
                    <Typography>Categories</Typography>
                    <Typography>About</Typography>
                </div>
            </div>
           
            <div style={{display:'flex',alignItems:'center',gap:'5px',justifyContent:'center',width:'330px',height:'258px'}}>
                <Typography style={{color:'#D1D6DA'}}>United States</Typography>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_601_377)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.98383C1.26256 0.690937 1.73744 0.690937 2.03033 0.98383L7.5 6.4535L12.9697 0.98383C13.2626 0.690937 13.7374 0.690937 14.0303 0.98383C14.3232 1.27672 14.3232 1.7516 14.0303 2.04449L8.03033 8.04449C7.73744 8.33738 7.26256 8.33738 6.96967 8.04449L0.96967 2.04449C0.676777 1.7516 0.676777 1.27672 0.96967 0.98383Z" fill="#E1E4E6"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_601_377">
                    <rect width="15" height="9" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
    </div>
  )
}

export default Footer