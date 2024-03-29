import React from 'react'
import image from "../asset/187db358671328189d3da83955a6ffe9.png"
import { Button, Chip, Typography } from '@mui/material'
import RelatedDeal from './ReleatedDeal'

const Main = () => {
    return (
        <div>
            <div className='list_ele' style={{listStyle:"none",display:"flex",justifyContent:"center",gap:"45px",fontSize:"13px",marginTop:"20px",color:"#4B5665"}}>
                <li>Tools</li>
                <li>AWS Builder</li>
                <li>Start Build</li>
                <li>Build Supplies</li>
                <li>Tooling</li>
                <li>BlueHosting</li>
            </div>
            <div className="path" style={{listStyle:"none",display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",fontSize:"14px",color:"#727D87",marginTop:"40px",marginRight:"100px"}}>
                <li>Home</li>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874"/>
                </svg>

                <li>Hosting for all</li>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874"/>
                </svg>
                <li>Hosting</li>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874"/>
                </svg>
                <li>Hosting6</li>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z" fill="#5C6874"/>
                </svg>
                <li>Hosting5</li>
            </div>
            <div className="box1" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                <div className="img" style={{width:"120px",height:"200px",marginLeft:'260px'}}>
                    <div className="bestChoice" style={{ display:"flex",alignItems:'center',justifyContent:'center',width:"130px",height:"30px",borderRadius:'0px 8px 8px 0px',backgroundColor:'#FF7724'}}>
                        <div className="trophy">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 1.6665C4.375 1.32133 4.65482 1.0415 5 1.0415H15C15.3452 1.0415 15.625 1.32133 15.625 1.6665V7.35278C15.625 10.5234 13.1236 13.1248 10 13.1248C6.87644 13.1248 4.375 10.5234 4.375 7.35278V1.6665ZM5.625 2.2915V7.35278C5.625 9.86744 7.60071 11.8748 10 11.8748C12.3993 11.8748 14.375 9.86744 14.375 7.35278V2.2915H5.625Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0415 4.58301C1.0415 4.23783 1.32133 3.95801 1.6665 3.95801H4.99984C5.34502 3.95801 5.62484 4.23783 5.62484 4.58301V8.74967C5.62484 9.09485 5.34502 9.37467 4.99984 9.37467C2.92768 9.37467 1.0415 7.64239 1.0415 4.58301ZM2.32395 5.20801C2.50507 6.88881 3.41739 7.77588 4.37484 8.03944V5.20801H2.32395Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.375 4.58301C14.375 4.23783 14.6548 3.95801 15 3.95801H18.3333C18.6785 3.95801 18.9583 4.23783 18.9583 4.58301C18.9583 7.64239 17.0722 9.37467 15 9.37467C14.6548 9.37467 14.375 9.09485 14.375 8.74967V4.58301ZM15.625 5.20801V8.03944C16.5824 7.77588 17.4948 6.88881 17.6759 5.20801H15.625Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12.708C10.3452 12.708 10.625 12.9878 10.625 13.333V14.9997C10.625 15.3449 10.3452 15.6247 10 15.6247C9.65482 15.6247 9.375 15.3449 9.375 14.9997V13.333C9.375 12.9878 9.65482 12.708 10 12.708Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25514 14.6726C7.36887 14.4877 7.57042 14.375 7.78752 14.375H12.101C12.3111 14.375 12.5071 14.4805 12.6228 14.6559L14.2717 17.1559C14.3983 17.3478 14.4093 17.5938 14.3003 17.7963C14.1913 17.9987 13.9799 18.125 13.75 18.125H6.25C6.0236 18.125 5.81491 18.0026 5.70445 17.805C5.59398 17.6073 5.59902 17.3654 5.71762 17.1726L7.25514 14.6726ZM8.13687 15.625L7.36812 16.875H12.5891L11.7646 15.625H8.13687Z" fill="white"/>
                        </svg>

                        </div>
                        <div className="text" style={{color:"#FFFFFF"}}>
                            <Typography>Best Choice</Typography>
                        </div>
                    </div>
                    <span>1</span>
                    <div className="monitor" style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:"55px"}}>
                        <img src={image} alt="img1" style={{width:"141px",height:"103px"}} />
                        <p>Builder 1</p>
                    </div>
                </div>
                <div className="content" style={{color:"#4B5665",width:"490px",height:'200px',marginLeft:"80px"}}>
                    <div className="upperContent" style={{marginTop:"30px"}}>
                        <Typography >
                            <span style={{fontWeight:"bold"}}>WixPro 72-Inch Responsive Website Builder-</span> 
                            Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                        </Typography>
                    </div>
                    <div className="lowerContent">
                        <div className="main_h" style={{marginTop:"5px",marginBottom:'10px'}}>
                            <span style={{fontWeight:"bold"}}>Main highlights</span>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                        <Typography>
                            [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                        </Typography>
                        </div>
                        <Button>Show More <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4"/>
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="ratting" style={{width:"200px",height:"230px",display:'flex',flexDirection:"column" }}>
                    <div className="rattingBox" style={{width:"135px",height:"118px",borderRadius:"0px 0px 12px 12px",backgroundColor:"#F3F9FF",display:"flex",flexDirection:"column",alignItems:'center',marginBottom:"50px"}}>
                       <Typography style={{fontSize:'32px',color:'#074786',paddingTop:"5px"}}>
                            9.8
                       </Typography>
                       
                       <Typography style= {{fontSize:'14px',color:'#074786'}}>
                            Exceptional
                       </Typography>
                       
                       <svg width="66" height="11" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_601_219)">
                        <path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F"/>
                        <path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F"/>
                        <path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F"/>
                        <path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F"/>
                        <path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_601_219">
                        <rect width="66" height="11" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <div className="btn" style={{width:"200px"}}>
                       <button style={{backgroundColor:'#1B88F4',color:"#FFFFFF",width:'180px',height:"34px",border:"none",borderRadius:"13px",marginTop:'40px'}}>View</button>
                    </div>
                </div>
            </div>
            <div className="box2" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                <div className="img" style={{width:"120px",height:"200px",marginLeft:'260px'}}>
                    <div className="bestChoice" style={{ display:"flex",alignItems:'center',justifyContent:'center',width:"130px",height:"30px",borderRadius:'0px 8px 8px 0px',backgroundColor:'#FF7724'}}>
                        <div className="trophy">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88981 1.77204C4.00126 1.57794 4.208 1.45825 4.43182 1.45825H15.5683C15.792 1.45825 15.9987 1.57794 16.1102 1.77204L19.292 7.31371C19.4234 7.54239 19.397 7.82886 19.2261 8.02975L10.4762 18.3214C10.3574 18.4611 10.1833 18.5416 10 18.5416C9.81668 18.5416 9.64259 18.4611 9.52384 18.3214L0.773841 8.02975C0.603042 7.82886 0.576697 7.54239 0.707994 7.31371L3.88981 1.77204ZM4.79366 2.70825L2.01087 7.55494L10 16.9516L17.9891 7.55494L15.2064 2.70825H4.79366Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22447 1.49382C4.55009 1.37931 4.90691 1.55044 5.02142 1.87607L9.99999 16.0329L14.9786 1.87607C15.0931 1.55044 15.4499 1.37931 15.7755 1.49382C16.1011 1.60833 16.2723 1.96514 16.1578 2.29077L10.5896 18.1241C10.5016 18.3744 10.2652 18.5417 9.99999 18.5417C9.73474 18.5417 9.49839 18.3744 9.41039 18.1241L3.84221 2.29077C3.72769 1.96514 3.89883 1.60833 4.22447 1.49382Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625 7.625C0.625 7.27981 0.904822 7 1.25 7H18.75C19.0951 7 19.375 7.27981 19.375 7.625C19.375 7.97018 19.0951 8.25 18.75 8.25H1.25C0.904822 8.25 0.625 7.97018 0.625 7.625Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.45825C10.2122 1.45825 10.4099 1.5659 10.525 1.74413L14.1046 7.2858C14.2919 7.57575 14.2086 7.96263 13.9187 8.14991C13.6287 8.3372 13.2419 8.25398 13.0546 7.96403L10 3.23514L6.94548 7.96403C6.7582 8.25398 6.37132 8.3372 6.08137 8.14991C5.79142 7.96263 5.7082 7.57575 5.89548 7.2858L9.47503 1.74413C9.59016 1.5659 9.78785 1.45825 10 1.45825Z" fill="white"/>
                        </svg>

                        </div>
                        <div className="text" style={{color:"#FFFFFF"}}>
                            <Typography>Best Value</Typography>
                        </div>
                    </div>
                    <span>2</span>
                    <div className="monitor" style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:"55px"}}>
                        <img src={image} alt="img1" style={{width:"141px",height:"103px"}} />
                        <p>Builder</p>
                    </div>
                </div>
                <div className="content" style={{color:"#4B5665",width:"490px",height:'200px',marginLeft:"80px"}}>
                    <div className="upperContent" style={{marginTop:"30px"}}>
                        <Typography >
                            <span style={{fontWeight:"bold"}}>SiteCraft 68-Inch Ultimate Web Design Studio-</span> 
                            Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                        </Typography>
                    </div>
                    <div className="lowerContent">
                        <div className="main_h" style={{marginTop:"5px",marginBottom:'10px'}}>
                            <span style={{fontWeight:"bold"}}>Main highlights</span>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                        <Typography>
                        [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                        </Typography>
                        </div>
                        <Button>Show More <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4"/>
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="ratting" style={{width:"200px",height:"230px",display:'flex',flexDirection:"column" }}>
                    <div className="rattingBox" style={{width:"135px",height:"118px",borderRadius:"0px 0px 12px 12px",backgroundColor:"#F3F9FF",display:"flex",flexDirection:"column",alignItems:'center',marginBottom:"50px"}}>
                       <Typography style={{fontSize:'32px',color:'#074786',paddingTop:"5px"}}>
                            9.5
                       </Typography>
                       
                       <Typography style= {{fontSize:'14px',color:'#074786'}}>
                        Excellent
                       </Typography>
                       
                       <svg width="66" height="11" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_601_219)">
                        <path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F"/>
                        <path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F"/>
                        <path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F"/>
                        <path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F"/>
                        <path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_601_219">
                        <rect width="66" height="11" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <div className="btn" style={{width:"200px"}}>
                       <button style={{backgroundColor:'#1B88F4',color:"#FFFFFF",width:'180px',height:"34px",border:"none",borderRadius:"13px",marginTop:'40px'}}>View</button>
                    </div>
                </div>
            </div>
            <div className="box3" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                <div className="img" style={{width:"120px",height:"200px",marginLeft:'260px'}}>
                    <span>3</span>
                    <div className="monitor" style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:"55px"}}>
                        <img src={image} alt="img1" style={{width:"141px",height:"103px"}} />
                        <p>Builder 1</p>
                    </div>
                </div>
                <div className="content" style={{color:"#4B5665",width:"490px",height:'200px',marginLeft:"80px"}}>
                    <div className="upperContent" style={{marginTop:"30px"}}>
                        <Typography >
                            <span style={{fontWeight:"bold"}}>WixPro 72-Inch Responsive Website Builder-</span> 
                            Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                        </Typography>
                    </div>
                    <div className="lowerContent">
                        <div className="main_h" style={{marginTop:"5px",marginBottom:'10px'}}>
                            <span style={{fontWeight:"bold"}}>Main highlights</span>
                        </div>
                        <div style={{marginLeft:"20px"}}>
                        <Typography>
                        [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                        </Typography>
                        </div>
                        <Button>Show More</Button>
                    </div>
                </div>
                <div className="ratting" style={{width:"200px",height:"230px",display:'flex',flexDirection:"column" }}>
                    <div className="rattingBox" style={{width:"135px",height:"118px",borderRadius:"0px 0px 12px 12px",backgroundColor:"#F3F9FF",display:"flex",flexDirection:"column",alignItems:'center',marginBottom:"50px"}}>
                       <Typography style={{fontSize:'32px',color:'#074786',paddingTop:"5px"}}>
                            9.3
                       </Typography>
                       
                       <Typography style= {{fontSize:'14px',color:'#074786'}}>
                            Exceptional
                       </Typography>
                       
                       <svg width="66" height="11" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_601_219)">
                        <path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F"/>
                        <path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F"/>
                        <path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F"/>
                        <path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F"/>
                        <path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_601_219">
                        <rect width="66" height="11" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <div className="btn" style={{width:"200px"}}>
                       <button style={{backgroundColor:'#1B88F4',color:"#FFFFFF",width:'180px',height:"34px",border:"none",borderRadius:"13px",marginTop:'40px'}}>View</button>
                    </div>
                </div>
            </div>
            <div className="box4" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                <div className="img" style={{width:"120px",height:"200px",marginLeft:'260px'}}>
                    <span>4</span>
                    <div className="monitor" style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:"55px"}}>
                        <img src={image} alt="img1" style={{width:"141px",height:"103px"}} />
                        <p>CDK</p>
                    </div>
                </div>
                <div className="content" style={{color:"#4B5665",width:"490px",height:'200px',marginLeft:"80px"}}>
                    <div className="upperContent" style={{marginTop:"30px"}}>
                        <div>
                            <Typography >
                                <span style={{fontWeight:"bold"}}>CDK Resposive Builder:</span> 
                                An extensive library of widgets and apps, and detailed step-by-step guides
                            </Typography>
                        </div>
                        <div style={{width:'70px',height:'30px',backgroundColor:'#F2F4F7',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'6px'}}>
                            <span>26% off</span>
                        </div>
                        
                    </div>
                    <div className="lowerContent">
                        <div className="main_h" style={{marginTop:"5px",marginBottom:'10px'}}>
                            <span style={{fontWeight:"bold"}}>Main highlights</span>
                        </div>
                        <div style={{width:"400px",height:'140px',backgroundColor:'#FFF4ED',borderRadius:'15px',display:'flex',flexDirection:'column'}}>
                            <div style={{display:'flex', justifyContent:'start',alignItems:'center',gap:"20px",marginLeft:'20px',marginTop:'10px'}}>
                                <div style={{width:"40px",height:"30px",backgroundColor:'#FFFFFF',color:'#1B88F4',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <span>9.9</span>
                                </div>
                                <div>
                                    <Typography style={{color:"#4B5665",fontSize:"20px"}}>building responsive</Typography>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'start',alignItems:'center',gap:"20px",marginLeft:'20px',marginTop:"10px"}}>
                                <div style={{width:"40px",height:"30px",backgroundColor:'#FFFFFF',color:'#1B88F4',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <span>8.9</span>
                                </div>
                                <div>
                                    <Typography style={{color:"#4B5665",fontSize:"20px"}}>Cools</Typography>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'start',alignItems:'center',gap:"20px",marginLeft:'20px',marginTop:'10px'}}>
                                <div style={{width:"40px",height:"30px",backgroundColor:'#FFFFFF',color:'#1B88F4',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                    <span>8.9</span>
                                </div>
                                <div>
                                    <Typography style={{color:"#4B5665",fontSize:"20px"}}>Docs</Typography>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginTop:'15px'}}>
                            <Typography style={{marginBottom:"8px"}}>Why We love it</Typography>
                            <div style={{display:'flex'}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
                                    </svg>
                                <Typography style={{marginLeft:'8px'}}>Documentation</Typography>
                            </div>
                            <div style={{display:'flex'}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
                                </svg>
                                <Typography style={{marginLeft:'8px'}}>Easy Use</Typography>
                            </div>
                            <div  style={{display:'flex'}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
                                </svg>
                                <Typography style={{marginLeft:"8px"}}>Out of box</Typography>
                            </div>
                        </div>
                    </div>
                                <Button>Show More</Button>
                </div>
                <div className="ratting" style={{width:"200px",height:"230px",display:'flex',flexDirection:"column" }}>
                    <div className="rattingBox" style={{width:"135px",height:"118px",borderRadius:"0px 0px 12px 12px",backgroundColor:"#F3F9FF",display:"flex",flexDirection:"column",alignItems:'center',marginBottom:"50px"}}>
                       <Typography style={{fontSize:'32px',color:'#074786',paddingTop:"5px"}}>
                            9.8
                       </Typography>
                       
                       <Typography style= {{fontSize:'14px',color:'#074786'}}>
                            Exceptional
                       </Typography>
                       
                       <svg width="66" height="11" viewBox="0 0 66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_601_219)">
                        <path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F"/>
                        <path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F"/>
                        <path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F"/>
                        <path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F"/>
                        <path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_601_219">
                        <rect width="66" height="11" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                    </div>
                    <div className="btn" style={{width:"200px"}}>
                       <button style={{backgroundColor:'#1B88F4',color:"#FFFFFF",width:'180px',height:"34px",border:"none",borderRadius:"13px",marginTop:'40px'}}>View</button>
                    </div>
                </div>
            </div>
            <div className="box4" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"230px",marginRight:'190px'}}>
                    <RelatedDeal/>
            </div>
            
        </div>
    )
}

export default Main