import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/system';
import Dashboard_au from './Dashboard_author';
import { Paper,Grid } from '@mui/material';
import DashboardFooter from './DashboardFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
function Faq() {
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isTextViible, setIsTextViible] = useState(false);
	const [value, setValue] = React.useState(0);
	const mobile = useMediaQuery('(max-width:600px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
	};
	const toggleTxt = () => {
		setIsTextViible(!isTextViible);
	};
  return (
	  <>
		  <Dashboard_au />
		  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'1300px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				  <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}>FAQ</Typography> 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>How can a professional editor help?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '164px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>How can a professional editor help?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  
					 
					 
					  </Grid> 
				  </Paper>
					
					
				  </>
				  
				  )}
			  <DashboardFooter />
			  </Box>
	  
           	
			  
		  
	
	
	  </>
  )
}
export default Faq;
