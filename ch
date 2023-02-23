import React from 'react'
import { Paper,Box, Typography, Button } from '@mui/material';
import Dashboard_menu from './Dashboard_menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import DashboardFooter from './DashboardFooter';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Explore() {
	const mobile = useMediaQuery('(max-width:600px)');
	const navigate = useNavigate();
	const handleExplore =  (e) => {
		navigate('/Editing')
	};
	const emailhandle = () => {
		const emailAddress = 'Abhijeet@Hubhawks.com';
		window.location.href = `mailto:${emailAddress}`;
	};
	const phonehandle = () => {
		const Phone = '+91-7060495034';
		window.location.href = `tel:${Phone}`;
	  };
	const styles = {
		paperContainer: {
			backgroundImage: mobile?`url(https://drive.google.com/uc?export=view&id=19eIDGRfBybfg2NM3sqpc5st9g-Wgw7YA),url(https://drive.google.com/uc?export=view&id=10AfCZlkqBJNXIqQmUSA1fV5sWtNfj242)`:`url(https://drive.google.com/uc?export=view&id=11K46_gkQ5voIg-2ia3SwujJLoDtrbIQ2),url(https://drive.google.com/uc?export=view&id=12vB0TKVYwiTQHlHQuXqcOcjwDui3fspu)`,
			backgroundSize: mobile?'30%,38%':'11%,15%',
			backgroundPosition:'top left,bottom Right'
		}
	}
  return (
	  <>
		  <Dashboard_menu />
		  <Box sx={{backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'100%':'100%',height:mobile?'100vh':'100vh'}}>
    <Paper   sx={{position: 'absolute',
width:mobile?'289px': '72.96%',
height: mobile?'179px':'auto',backgroundPosition:mobile?'bottom right':'right',backgroundSize:'44%',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',marginTop:mobile?"50px":"0px",
top:mobile?'90px': '70px',backgroundImage: "url(https://drive.google.com/uc?export=view&id=1XD9BM3-J3wosCLhg_BUoMS7d7SpEbYps)", backgroundRepeat: 'no-repeat',
				borderRadius: '12px'
			  }}>
				  <Grid container md={8} xs={12} sx={{}}>
					  <Grid item md={11} xs={11} sx={{margin:'auto',marginTop:mobile?'0px':"12px"}}>
					  <Typography sx={{fontSize:mobile?'14px':"24px",fontWeight:"600",textAlign:"initial",marginLeft:mobile?'16px':"26px",marginTop:mobile?'16px':"26px",lineHeight:"12px"}}>Explore Our Services
				  </Typography>  
					  </Grid>
					  <Grid item md={10} xs={11} sx={{margin:'auto'}}>
					  <Typography sx={{fontSize:mobile?'12px':"18px",textAlign:"initial",marginLeft:mobile?'16px':"0px",marginTop:mobile?'8px':"24px",lineHeight:mobile?"16px":'26px',color:'#333335'}}>We assist you in selecting the finest options for your book. Our services, which include editing, cover design, public relations, social media marketing, and many more, are intended to accentuate your literary experience.
				  </Typography>
					  </Grid>
					  <Grid item md={4} xs={4} sx={{margin:'initial',marginTop:mobile?'0px':"12px",marginBottom:mobile?"0px":"20px"}}>
				  <Button
              variant="contained"
              color="primary"
				sx={{marginTop:mobile?'8px':'0px',marginLeft:mobile?'16px':'0px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'10px':'16px',borderRadius:'8px',width: mobile?'92px':'128px',
								  height: mobile ? '27px' : '48px', marginRight: mobile ? '141px' : '0px'
							  }}
							  onClick={handleExplore}
            >
              Explore now
					  </Button>
					  </Grid>
				  </Grid> 
				  
			  </Paper>
			  
			  <Paper style={styles.paperContainer}  sx={{position: 'absolute',margin:'auto',
width:mobile?'289px': '72.96%',
height: mobile?'189px':'auto',backgroundPosition:mobile?'top left':'inherit',backgroundSize:mobile?'91px':'50%',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'260px': '363px', backgroundRepeat: 'no-repeat',marginTop:mobile?"89px":"0px",

				borderRadius: '12px'
			  }}>
				  
				   <Grid container md={8} xs={12} sx={{margin:'auto'}}>
					  <Grid item md={8} xs={6} sx={{margin:'auto',marginTop:mobile?"39px":"56px",marginBottom:mobile?"0px":"29px"}}>
					  <Typography sx={{fontSize:mobile?'14px':"36px",fontWeight:"600",textAlign:"initial",marginTop:mobile?'16px':"26px",lineHeight:"12px"}}>For Custom Order
				  </Typography>  
					  </Grid>
					  <Grid item md={8} xs={8} sx={{margin:'auto',marginTop:mobile?"9px":"19px",margin:mobile?'auto':'initial',marginBottom:mobile?"0px":"4px"}}>
						  <Button onClick={emailhandle } style={{color:"black",textTransform:'none',fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><EmailIcon />Abhijeet@Hubhawks.com</Button>
					  </Grid>
					  <Grid item md={8} xs={8} sx={{margin:'auto',marginTop:mobile?"9px":"12px",margin:mobile?'auto':'initial',marginBottom:mobile?"":"10px"}}>
					 
					  <Button onClick={phonehandle } style={{color:"black",fontSize:mobile?'14px':"18px",fontWeight:'600'}} ><LocalPhoneIcon/>+91-7060495034</Button>
					  </Grid>
					  
				
					
					  </Grid>
					  <Box style={{backgroundImage:`url(https://drive.google.com/uc?export=view&id=)`,backgroundRepeat:'no-repeat',backgroundPosition:mobile?'bottom Right':'inherit',backgroundSize:mobile?'91px':'50%'}}>
				
				  </Box>    
			  </Paper>
			  {/* {mobile?<DashboardFooter />:''}	 */}
			  </Box>
	  </>
  )
}
export default Explore;
