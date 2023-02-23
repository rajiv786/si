import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box, Typography } from "@mui/material";
import Footer from "../footer";
import { Grid } from "@mui/material";
import Image from "mui-image";
import { Button } from "@mui/material";
import ResponsiveAppBar from "./menu";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

function Blog() {
	const mobile = useMediaQuery('(max-width:600px)');

	return (<>
	  <ResponsiveAppBar/>
	  <Grid container md={12}xs={12} lg={12}>
		<Grid item md={12} xs={12} lg={12}>
			<Typography variant='h2' sx={{marginTop:mobile?'35px':'80px',fontSize:mobile?'20px':'36px',lineHeight:mobile?'24px':"48px",fontWeight:"600"}}>Blog</Typography>
		</Grid>
	  </Grid>
	  <Grid container md={12} xs={12} lg={12}>
			<Grid container md={6} xs={6} lg={6}>
				<Grid item md={12} lg={12}>
			<Link to='../Blog1' style={{textDecoration:'none',color:'black'}}>	
  <Image Duration={0} 
              src="https://drive.google.com/uc?export=view&id=1oqJWafHVHnqBaZ7I5oEsHXvcDhK4ZyRV"
              style={{ margin:"auto",transitionDuration:'0',animation:'0',width:mobile?'128px':"75%",height:mobile?'88px':"282px",borderRadius:"12px",marginTop:mobile?'36px':'64px',marginLeft:mobile?'54px':"158px"}}
						/>
						</Link>	
			</Grid>
				<Grid item md={12} lg={12}>
					<Grid item md={12} lg={6}sx={{margin:mobile?"0px":'auto'}}>
				<Typography sx={{textAlign:'initial',marginLeft:mobile?'56px':'0px'}}>Oct 10, 2022</Typography>		
					</Grid>
					<Grid item md={12} lg={10}sx={{margin:mobile?"0px":'0px',justifyContent:"end",display:'flex'}}>
					<Link to='../Blog1' style={{ textDecoration: 'none', color: 'black' }}>
						<Typography variant='h2' sx={{ fontSize: mobile ? '16px' : '36px', marginTop: mobile ? '5px' : '20px', marginLeft: mobile ? '58px' : '0px', textAlign: 'initial', fontWeight: 600, lineHeight: mobile ? '20px' : '48px' }}>
			Secrets for writing a fiction BestSelling Novel
					</Typography>
						</Link>
						</Grid>
		  </Grid>
  </Grid>
  <Grid container md={6} xs={6} lg={6}>
	<Grid item md={12} xs={12}>
	<Link to='../Blog4' style={{textDecoration:'none',color:'black'}}>	
  <Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1R97Z__BFgDkWpVwb2TyXP6SLH5pBuHkJ"
			  style={{ margin:"auto",transitionDuration:'0',animation:'0',width:mobile?'128px':"75%",height:mobile?'88px':"282px",borderRadius:"12px",marginTop:mobile?'36px':'60px',marginLeft:mobile?'54px':"50px"}}    />
			</Link>	</Grid>
				<Grid item md={12} xs={12}>
				<Grid item md={12} xs={12}>
				<Link to='../Blog4' style={{textDecoration:'none',color:'black'}}>		<Typography sx={{textAlign:'initial',marginLeft:mobile?'60px':'50px'}}>Oct 6, 2022</Typography>		
			</Link>		</Grid>
          {mobile?
   <Link to='../Blog4' style={{textDecoration:'none',color:'black'}}>    <Typography variant='h2' sx={{fontSize:mobile?'16px':'36px',marginTop:mobile?'10px':'20px',marginLeft:mobile?'54px':'0px',textAlign:'initial',fontWeight:600,lineHeight:mobile?'20px':'48px'}}>
         How to write a captivating Blu..
                 </Typography> </Link>   :
						<Link to='../Blog4' style={{textDecoration:'none',color:'black'}}>
							<Typography variant='h2' sx={{ fontSize: mobile ? '16px' : '36px', marginTop: mobile ? '10px' : '20px', marginLeft: mobile ? '54px' : '54px', textAlign: 'initial', fontWeight: 600, lineHeight: mobile ? '20px' : '48px' }}>
                  How to write a captivating 
						</Typography>
					</Link>  }
 
		  </Grid>
  </Grid>
  <Grid container md={6} xs={6}>
	<Grid item md={12} xs={12}>
	<Link to='../Blog3'style={{textDecoration:'none',color:'black'}}>  
					<Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=1SuJ-eE-74BrNcg05LVfms7sXErth3usK"
			  style={{ margin:"auto",transitionDuration:'0',animation:'0',width:mobile?'128px':"75%",height:mobile?'88px':"282px",borderRadius:"12px",marginTop:mobile?'36px':'64px',marginLeft:mobile?'54px':"181px"}}
              /> </Link>
			</Grid>
				<Grid item md={12} xs={12}>
				<Grid item md={12} xs={12}>
				<Typography sx={{textAlign:'initial',marginLeft:mobile?'50px':'181px',marginTop:mobile?'-31px':'0px'}}>Oct 5, 2022</Typography>		
					</Grid>
					<Link to='../Blog3' style={{textDecoration:'none',color:'black'}}>  		<Typography variant='h2' sx={{fontSize:mobile?'16px':'36px',marginTop:mobile?'6px':'20px',marginLeft:mobile?'56px':'176px',textAlign:'initial',fontWeight:600,lineHeight:mobile?'20px':'48px',marginBottom:mobile?'96px':"104px"}}>
			 Tricks to Writing a Non-Fiction Bestselling
					</Typography>
						</Link>
		  </Grid>
  </Grid>
  <Grid container md={6} xs={6}>
	<Grid item md={12} xs={12}>
					<Link to='../Blog2' style={{ textDecoration: 'none', color: 'black' }}>
						<Image Duration={0}
              src="https://drive.google.com/uc?export=view&id=13fKbtAl71NOq_TLbnSCZRnTx3mu94Qs8"
			  style={{ margin:"auto",transitionDuration:'0',animation:'0',width:mobile?'128px':"75%",height:mobile?'88px':"282px",borderRadius:"12px",marginTop:mobile?'36px':'64px',marginLeft:mobile?'54px':"61px"}}
					/> 
						</Link>
			</Grid>
				<Grid item md={12} xs={12}>
				<Grid item md={5} xs={12}>
				<Typography sx={{textAlign:'initial',marginRight:mobile?'0px':'50px',marginLeft:mobile?'60px':'50px'}}>Oct 30, 2022</Typography>		
					</Grid>
					<Link to='../Blog2' style={{ textDecoration: 'none', color: 'black' }}>
						<Typography variant='h2' sx={{ fontSize: mobile ? '16px' : '36px',  marginTop: mobile ? '28px' : '20px', marginLeft: mobile ? '52px' : '60px', textAlign: 'initial', fontWeight: 600, lineHeight: mobile ? '20px' : '48px', marginBottom: mobile ? '96px' : "104px", marginTop: mobile ? "7px" : "0px" }}>
  Types of Editing and How it Refines Your Manuscript
					</Typography>
						</Link>
		  </Grid>
  </Grid>
  
	
  </Grid>

  
		
	   <Footer/>
	  </>
  );
}
export default Blog;
