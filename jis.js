import React from 'react'
//import * as React from 'react';
import { useRef ,useEffect} from "react";
import { Paper } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm , Controller, FormProvider } from "react-hook-form";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from '../components/menu';
import Image from "mui-image";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { borderColor } from '@mui/system';
import { Email_URL,BASE_URL } from '../components/helper'
import axios from 'axios';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import useMediaQuery from '@mui/material/useMediaQuery';
import { green, blue, grey, red,yellow,common} from "@mui/material/colors";
import Dashboard_au from './Dashboard_author';
import { makeStyles } from 'tss-react/mui';
import Footer from '../footer';
import DashboardFooter from './DashboardFooter';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import jwt_decode from "jwt-decode";


import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
const pages = ['Home', 'Services', 'About', 'Contact', 'Blog', 'Signin'];
const dashboard1=['Editing','CoverDesigning','Translation','GhostWriting','AmazonAds','BookReviews','BookTrailer','BookStore']
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "space-between",
	  padding: theme.spacing(2),
	  backgroundColor: "#fafafa",
	  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
	},
	marketplace: {
	  fontWeight: "bold",
	},
	search: {
	  width: "60%",
	},
}));
const ServicesE = [
	{ title: "Editing" ,value:'editing'},
	{ title: "Cover Designing"},
	{ title: "Translation" },
	{ title: "Book Store" },
	{ title: "Book Reviews" },{ title: "Book Trailer" },{ title: "Ghost Writing" },{ title: "Amazon Ads" }
  ];
function Editing(props, status, r, profile,dash) {
	const { register, watch,control,handleSubmit,setValue,reset, formState: { errors } } = useForm();
	const { window } = props;
	const form = useRef();
	
	const mobile = useMediaQuery('(max-width:600px)');
	const dm= useMediaQuery('(min-width: 1200px) and (max-width: 1380px)');
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [adventurous, setAdventurous] = useState(null);
	const [Autobiographical, setAutobiographical] = useState(null);
	const [Biography, setBiography] = useState(null);
	const [Candid, setCandid] = useState(null);
	const [Classic, setClassic] = useState(null);
	const [Coming, setComing] = useState(null);
	const [Dark, setDark] = useState(null);
	const [Deep, setDeep] = useState(null);
	const [Diverse, setDiverse] = useState(null);
	const [Educational, setEducational] = useState(null);
	const [Empowering, setEmpowering] = useState(null);
	const [Fictional, setFictional] = useState(null);
	const [Futuristic, setFuturistic] = useState(null);
	const [Funny, setFunny] = useState(null);
	const [Emotional,setEmotional] = useState(null);
	const [selectedOption, setSelectedOption] = useState("");
	const [textInput, setTextInput] = useState("");
	const [textColor, setTextColor] = useState('black');
	const [user, setUser] = useState({
		to: "rajeevkhanduja@gmail.com",
		subject: "",
		description: "",
		
	});
	const [open, setOpen] = React.useState(false);

	
  
	const handleClose = () => {
		setOpen(false);
		reset();
	};
	function LinkTab(props) {
		return (
		  <Tab
			component="a"
			onClick={(event) => {
			  event.preventDefault();
			}}
			{...props}
		  />
		);
	  }
	const classes = useStyles();
// 	const [color, setColor] = useState("");
	const [write, setWrite] = useState("");
	const [msg,setMsg] = useState('');
//   const handleColor = () => {
//     setColor("#3A81F3");
//     setTextColor("white");
//   };
const [data, setData] = useState(null);
const [showGrid, setShowGrid] = useState(false);
const [users, setUsers] = useState([]);
const navigate = useNavigate();
//   useEffect(() => {
//     fetch('/api/users/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsers(data.users);
//       });
//   }, []);
	// console.log(JSON.stringify(users.name),'sdsd');
	const [value1, setValue1] = React.useState(0);
	const getUserFromToken = () => {
		const token = localStorage.getItem("token");
		console.log(token, 'token');
		if (!token)
			return null;
		try {
			const decoded = jwt_decode(token);
			console.log(decoded, 'toksen');
		  return decoded;
		} catch (error) {
		  console.error(error);
		  return null;
		}
	};
	const getUserFromToken1 = () => {
		const gogle = localStorage.getItem("user");
		console.log(gogle, 'token');
		if (!gogle)
			return null;
		try {
			const decoded = jwt_decode(gogle);
			console.log(decoded, 'toksen');
		  return decoded;
		} catch (error) {
		  console.error(error);
		  return null;
		}
	  };
  const handleChange = (event, newValue) => {
    setValue1(newValue);
	};
	const handleOptionClick = (value) => {
		setSearchQuery("");
		navigate(`/${value}`);
	  };

const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
	};
	const handlewrite = (event) => {
		setWrite(event.target.value);
	}
	const black = grey;
	const onSubmit = async (data,e) => {
		const formData = new FormData();
		console.log(data);
		setOpen(true);
		e.preventDefault();
		
		const user1 = getUserFromToken1();
		const user = getUserFromToken();
		if (user) {
			
			if (!user) return;
			const response = await axios.post(`${Email_URL}/api/email/editing`, {
				...data, user
			
			}).then((res) => res.json()).then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
					alert("Message Sent");
				} else if (resData.status === "fail") {
					alert("Message failed to send");
				}
			})
			console.log(JSON.stringify(data), user, 'rajivk');
		}
		else {
			
			if (user1) {
				const user1 = getUserFromToken1();
			if (!user1) return;
			const response = await axios.post(`${Email_URL}/api/email/editingG`, {
				...data, user1
			
			}).then((res) => res.json()).then(async (res) => {
				const resData = await res;
				console.log(resData);
				if (resData.status === "success") {
					alert("Message Sent");
				} else if (resData.status === "fail") {
					alert("Message failed to send");
				}
			})
			console.log(JSON.stringify(data), user1, 'rajivk');
			}
		}
		console.log(JSON.stringify(data));
		console.log(FormData, 'hi');
	  };
	function colorForStatus(status) {
		switch (status) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming-of-age":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
				return common;
			case "rj":
				return yellow;
		  
		  default:
			return grey;
		}
	}
	function colorForStatus(dash) {
		switch (dash) {
		  case "Adventurous":
		  case "Autobiographical":
			case "Biography":
			case "Candid":
			case "Classic":
			case "Coming-of-age":
			case "Dark":
			case "Deep":
			case "Diverse":
			case "Educational":
			case "Empowering":
			case "Fictional":
			case "Futuristic":
			case "Funny":
			case "Emotional":
				
				
				return common;
			case "rj":
				return yellow;
		  
		  default:
			return black;
		}
	}
	const [searchValue, setSearchValue] = useState('');
	
	const [searchTerm, setSearchTerm] = useState("");
	const [suggestions, setSuggestions] = useState([]);
  
	
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleChange11 = (event, value) => {
		setSelectedOptions(value);
		navigate(`../${value}`);
	}
	const handleLogout = () => {
		localStorage.removeItem("token");
	};
	const onValueChange=(event)=> {
		setSelectedOption(event.target.value);
		console.log(event.target.value);	
	  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
	};
	const handleClick = () => {
		console.info('You clicked the Chip.');
	  };
	  const [searchQuery, setSearchQuery] = useState("");
	 
	
	//   const handleSearch = (event) => {
	// 	setSearchQuery(event.target.value);
	// 	if (event.target.value === "Editing"||event.target.value === "editing") {
	// 	  setOptions(["Editing"]);
	// 	} else {
	// 	  setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Coverdesigning"||event.target.value === "coverdesigning") {
	// 		setOptions(["Coverdesigning"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Translation"||event.target.value === "translation") {
	// 		setOptions(["Translation"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Ghostwriting"||event.target.value === "ghostwriting") {
	// 		setOptions(["Ghostwriting"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Booktrailer"||event.target.value === "Booktrailer") {
	// 		setOptions(["coverdesigning"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Coverdesigning"||event.target.value === "coverdesigning") {
	// 		setOptions(["coverdesigning"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Coverdesigning"||event.target.value === "coverdesigning") {
	// 		setOptions(["coverdesigning"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	// 	  if (event.target.value === "Coverdesigning"||event.target.value === "coverdesigning") {
	// 		setOptions(["coverdesigning"]);
	// 	  } else {
	// 		setOptions([]);
	// 	  }
	//   };
	
	
	
  const drawer = (
    <div>
		  <Toolbar />
		  <Box sx={{m:"auto"}}>
			  <Image duration={0} src="https://drive.google.com/uc?export=view&id=1DAyaOiRTn1fi2eVSohkY6-2XgHxuwLd5" style={{
    width: '98px',
    height: '105px'
			  }}></Image>
		  
          </Box>
	  <Divider />
      <List>
        {["Progress", "Marketplace", "FAQ","setting"].map((text, index) => (
			<>
				
		  <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
			</ListItem>
				<Divider />
				
				</>
		))}
			  
			  <button onClick={handleLogout}>
				<Link to ='/'>Logout</Link>	
				</button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

	return (<>
		<Dashboard_au />
		
		<Box sx={{  backgroundImage: "url(https://drive.google.com/uc?export=view&id=1a9C2MSUDCGw-b7DDDTyCRZAcspkMvKWA)", background:mobile?'':'#F3F5F9',backgroundSize:mobile?"100%":'',display:"flex",width:mobile?'auto':dm?"121%":'auto',height:mobile?'912px':'1300px'}}>
		{mobile?'':<Grid container md={12} sx={{marginTop:"20px"}}>
				<Grid container md={6}>
					<Grid item md={12}>
					<Typography sx={{fontSize:'36px',color:'#BB0000',fontWeight: '600'}}>Marketplace</Typography>	
					</Grid>
				</Grid>
				<Grid container md={6}>
					<Grid item md={6}>
						<Autocomplete
							disableClearable
							value={ServicesE.value}
							onChange={handleChange11}
							style={{ backgroundColor: '#FFFFFF' }}
        options={ServicesE.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
				placeholder="Search for book services"	
            InputProps={{
              ...params.InputProps,
              type: "search"
            }}
          />
        )}
      />
		
					</Grid>
					<Grid item md={2}>
					<Button variant="contained" color="primary" sx={{textDecoration:'none',textTransform:'none',borderRadius:"8px",width:'119px',height:"48px"}}>
            Contact Us
          </Button>
					</Grid>
				</Grid>
			</Grid>}	
			<Paper component='form' width="1152px" height='950px' sx={{
				position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'750px':'1120px',
left: mobile?'24px':'32px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#FFFFFF',
				borderRadius: '12px'
			}}>
				{mobile?<Tabs
					value={value1}
					onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
					<Tab label="Editing" value1='0' style={{textTransform:'none'}} href="/Explore"  />
        <Tab label="Cover Designing" value1='1' style={{textTransform:'none'}}href="/CoverDesigning" />
        <Tab label="Translation" value1='2' style={{textTransform:'none'}}href="/Translation"/>
        <Tab label="Ghost Writing"value1='3'style={{textTransform:'none'}} href= "/GhostWriting"/>
        <Tab label="Amazon Ads"value1='4' style={{textTransform:'none'}}href=  "/AmazonAds"/>
        <Tab label="Book Reviews"value1='5' style={{textTransform:'none'}} href= "/BookReviews"/>
		<Tab label="Book Trailer"value1='6' style={{textTransform:'none'}}href="/BookTrailer" />
		<Tab label="Book Store"value1='7' style={{textTransform:'none'}}href= "/Bookstore" />
		</Tabs>
					: <Box component='nav' sx={{
				marginLeft:'28px',borderRadius: '12px',marginTop:'25px',display:"flex",
width: '100%',
height: '45px'}}>
	  <Tabs
					value={value1}
					onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
					<Tab label="Editing" value1='0' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:600}}component={Link} to="/Editing"  />
							<Tab label="Cover Designing" value1='1' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 400 }} component={Link} to="/CoverDesigning" />
							<Tab label="Translation" value1='2' style={{ textTransform: 'none', color: '#000000', fontSize: '16px', fontWeight: 400 }} component={Link } to="/Translation"/>
        <Tab label="Ghostwriting"value1='3'style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to= "/GhostWriting"/>
        <Tab label="Amazon Ads"value1='4' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to=  "/AmazonAds"/>
        <Tab label="Book Reviews"value1='5' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to= "/BookReviews"/>
		<Tab label="Book Trailer"value1='6' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link }to="/BookTrailer" />
		<Tab label="Bookstore"value1='7' style={{textTransform:'none',color:'#000000',fontSize:'16px',fontWeight:400}} component={Link } to= "/Bookstore" />
		</Tabs>
		  
		  </Box>}
			<Grid container md={12} xs={12}>
			<Grid item md={12} xs={12} sx={{textAlign:'initial'}}>
					<Typography sx={{ml:mobile?'16px':'84px',marginTop:mobile?'12px':'56px',fontSize:mobile?'12px': '18px'}} >What type of editing are you looking for? </Typography>		 
				</Grid>
				<Grid item md={6} xs={12}  sx={{textAlign:'initial',marginTop:mobile?'0px':'16px'}}>
		<label htmlFor="field-rain" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Substantive Editing"
						id="field-rain" 
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Substantive Editing
                </label><br/>
                <label htmlFor="field-wind" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Copyediting"
							id="field-wind"
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Copyediting
                </label><br/>
                <label htmlFor="field-sun" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Proofreading"
							id="field-sun"
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Proofreading
					  </label><br />
					  <label htmlFor="field-sun" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Beta-reading"
							id="field-sun"
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Beta-reading
					  </label><br />
					  <label htmlFor="field-sun" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Editorial Evaluation"
							id="field-sun"
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Editorial Evaluation
					  </label><br/>
					  <label htmlFor="field-sun" style={{marginLeft:mobile?'16px':'82px',fontSize:mobile?'12px':'18px',lineHeight:mobile?'16px':"28px",marginTop:mobile?'2px':'8px'}}>
                    <input
                        {...register("EditingType")}
                        type="radio"
                        value="Narrative Assessment"
							id="field-sun"
							style={{width:mobile?"8px":'16px',
							height:mobile?"8px":'16px',marginRight:mobile?'6px':'12px'}}
                    />
                    Narrative Assessment
					  </label><br/>
				</Grid>
				  </Grid>
			<Grid container md={12} xs={12}>
					<Grid item md={12} xs={12} sx={{textAlign:'initial'}}>
					  <Typography sx={{ml:mobile?"16px":'84px',marginTop:mobile?"12px":'56px',fontSize:mobile?'12px': '18px'}} >Which three words describe your book?</Typography>
				</Grid>
				
				<Grid item md={12} xs={12} sx={{justifyContent:'initial',marginTop:'12px'}}>
				<Button label="Adventurous" variant='outlined'
							 style={{
								backgroundColor: colorForStatus((status = adventurous))[100],
								color:colorForStatus((dash = adventurous))[900], width: mobile?'73px':'134px',
								height:mobile?'24px': '40px',borderRadius:'20px',marginLeft:mobile?"-12px":'16px',fontSize:mobile?'10px':"18px",textTransform:'none'
								,minWidth:"40px"  }} 
								  value={user.description}
							  onClick={(e) => {
								  if (adventurous === null) {
      setAdventurous("Adventurous");
      setValue("words1", "Adventurous");
    } else {
      setAdventurous(null);
      setValue("words1", null);
    }
								  
							  }} >Adventurous </Button>
						  <Button variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Autobiographical))[100],
								
								color:colorForStatus((dash = Autobiographical))[900], width:  mobile?'92px':'168px',
								height: mobile?'24px': '40px',borderRadius:'20px',marginLeft:mobile?"6px":'16px',fontSize:mobile?'10px':'18px',textTransform:'none'
								,minWidth:"40px" }} 
							  label="Autobiographical"
							onClick={
								(e) => {
									if (Autobiographical === null) {
									  setAutobiographical("Autobiographical");
									  setValue("words2", "Autobiographical");
									} else {
									  setAutobiographical(null);
									  setValue("words2", null);
									}
								  }
							} >
							Autobiographical
							 </Button>
						
						  <Button label="Biography" variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Biography))[100],
								
								color:colorForStatus((dash = Biography))[900], width:  mobile?'61px':'113px',
								height: mobile?'24px': '40px',borderRadius:'20px',marginLeft:mobile?"6px":'16px',fontSize:mobile?'10px':'18px',textTransform:'none'
								,minWidth:"40px" }}
							onClick={(e) => {
								if (Biography === null) {
									setBiography("Biography");
									setValue("words3", "Biography");
								  } else {
									setBiography(null);
									setValue("words2", null);
								  }
								  }} >Biography</Button>
						  <Button label="Candid" variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Candid))[100],
								
								color:colorForStatus((dash = Candid))[900], width:  mobile?'48px':'89px',
								height:  mobile?'24px':'40px',borderRadius:'20px',marginLeft:mobile?"0px":'16px',fontSize:mobile?'10px':'18px',textTransform:'none',marginTop:mobile?"6px":"0px"
								,minWidth:"40px"
							}} onClick={(e) => {
								if (Candid === null) {
									setCandid("Candid");
							  setValue("word4","Candid")  
								}
								else {
									setCandid(null);
							  setValue("word4",null)
								}
								  }} >Candid</Button>
						  
						  <Button  variant='outlined' label="Classic"
							  style={{
								backgroundColor: colorForStatus((status = Classic))[100],
								
								color:colorForStatus((dash = Classic))[900], width:mobile?'40px': '91px',
								height: mobile?'24px':'40px',borderRadius:'20px',marginLeft:mobile?"3px":'16px',fontSize:mobile?'10px':'18px',textTransform:'none',marginTop:mobile?"6px":"0px"
								,minWidth:"40px"
							}} onClick={(e) => {
								if (Classic === null) {
									setClassic("Classic");
									setValue("word5","Classic")
								}
								else {
									setClassic(null);
								  setValue("word5",null)
								}
								
							  }} >Classic</Button>
						  <Button variant='outlined' 
							  style={{
								backgroundColor: colorForStatus((status = Coming))[100],
								
								color:colorForStatus((dash = Coming))[900], width: mobile?'102px':'162px',
								  height:mobile?'24px': '40px', borderRadius: '20px', marginLeft:mobile?"3px": '16px', fontSize:mobile?'10px': '18px', textTransform: 'none',marginTop:mobile?"6px":"0px",
								  minWidth:"40px"
							  }}
							onClick={(e) => {
								if (Coming == null) {
									setComing("Coming-of-age");
									setValue("word6", "Coming-of-age")
								}
								else {
									setComing(null);
								setValue("word6", null)
								}
							}} >Coming-of-age</Button>
						
						{mobile ? '' :<>
						<Button label="Dark" variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Dark))[100],
						 
						  color:colorForStatus((dash = Dark))[900], width: '69px',
						  height: mobile?'24px':'40px',borderRadius:'20px',marginLeft:mobile?"6px":'16px',fontSize:mobile?'10px':'18px',textTransform:'none'
						  ,minWidth:"40px"}}
								onClick={(e) => {
									if (Dark === null) {
										setDark("Dark");
										setValue("word7","Dark")
									}
									else {
										setDark(null);
						setValue("word7",null)
									}
							}} >Dark</Button>
					<Button label="Deep"  variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Deep))[100],
						  
						  color:colorForStatus((dash = Deep))[900], width: '74px',
						  height: mobile?'24px':'40px',borderRadius:'20px',marginLeft:'16px',fontSize:mobile?'10px':'18px',textTransform:'none'
						  ,minWidth:"40px"}}
								onClick={(e) => {
									if (Deep === null) {
										setDeep("Deep");
										setValue("word8", "Deep")
									}
									else {
										setDeep(null);
					 					setValue("word8", null)
									}
							
				  }} >Deep</Button>
				  <br />
				  <Grid item md={12} xs={1} sx={{ marginTop: '22px', display:'flex'}}>
					<Button label="Diverse" variant='outlined'
					   style={{
						  backgroundColor: colorForStatus((status = Diverse))[100],
						 
						  color:colorForStatus((dash = Diverse))[900], width: '92px',
						   height:mobile?'24px': '40px', borderRadius: '20px', marginLeft:  '84px',fontSize:mobile?'10px':'18px',textTransform:'none'
										, minWidth: "40px"
									}} onClick={(e) => {
										if (Diverse === null) {
											setDiverse("Diverse");
											setValue("word9","Diverse")
										} else {
											setDiverse(null);
											setValue("word9",null)	
							   }
							}} >Diverse</Button>
					<Button label="Educational" variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Educational))[100],
						 
						  color:colorForStatus((dash = Educational))[900], width: '127px',
						  height:mobile?'24px': '40px',borderRadius:'20px',marginLeft:'16px',fontSize:mobile?'10px':'18px',textTransform:'none'
										, minWidth: "40px"
									}} onClick={(e) => {
										if (Educational === null) {
											setEducational("Educational");
											setValue("word10","Educational")
										}
										else {
											setEducational(null);
							setValue("word10",null)
							  }
							}}>Educational</Button>
					<Button label="Empowering"  variant='outlined'
					  style={{
						  backgroundColor: colorForStatus((status = Empowering))[100],
						
						  color:colorForStatus((dash = Empowering))[900],width: '133px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'16px'
						  
						}} onClick={(e) => {
							if (Empowering === null) {
								setEmpowering("Empowering");
							setValue("words11", "Empowering");
							}
							else {
								setEmpowering(null);
							setValue("words11", null);
							}
						}} >Empowering</Button>
				  <Button label="Emotional" variant='outlined'
					  style={{
						  backgroundColor: colorForStatus((status = Emotional))[100],
						  
						  color:colorForStatus((dash = Emotional))[900],width: '113px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'16px'
						}} onClick={(e) => {
							if (Emotional === null) {
								setEmotional("Emotional");
							setValue("word12", "Emotional");
							}
							else {
								setEmotional(null);
								setValue("word12", null);
							}
						}} >Emotional</Button>
					<Button label="Fictional" variant='outlined'
					   style={{
						  backgroundColor: colorForStatus((status = Fictional))[100],
						  
						  color:colorForStatus((dash = Fictional))[900],width: '101px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'16px'
						}} onClick={(e) => {
							if (Fictional === null) {
								setFictional("Fictional");
							setValue("words13", "Fictional");
							}
							else {
								setFictional(null);
								setValue("words13", null);
							}
									}} >Fictional</Button>
					<Button label="Funny"  variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Funny))[100],
					
						  color:colorForStatus((dash = Funny))[900],width: '81px',
						  height: mobile?'24px':'40px',borderRadius:'20px',fontSize:mobile?'12px':"18px",textTransform:'none',marginLeft:'16px'
						}} onClick={(e) => {
							if (Funny === null) {
								setFunny("Funny");
						setValue("words14","Funny")
										}
							else {
								setFunny(null);
						        setValue("words14",null)
									}}}>Funny </Button>
					<Button label="Futuristic" variant='outlined'
						style={{backgroundColor: colorForStatus((status = Futuristic))[100],
						  
						  color:colorForStatus((dash = Futuristic))[900],width: '107px',
						  height: mobile?'24px':'40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'16px'
						   
						}} onClick={(e) => {
							if (Futuristic === null) {
								setFuturistic("Futuristic");
							  setValue("words15", "Futuristics")
							}
							else {
								setFuturistic(null);
							  setValue("words15", null)
							}
									}}>Futuristic</Button>
							</Grid>
							</>}

						{mobile &&
							<Button   style={{width:'30px',height:"6px",fontSize:"10px",marginTop:'6px',textTransform:"none"}} onClick={() => setShowGrid(!showGrid)}>See all</Button>	
						}
						{(mobile && showGrid) &&<>
						
							<Grid item md={12}   sx={{ marginTop: mobile?"6px":'22px' }}>
							<Button label="Dark" variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Dark))[100],
							
							minWidth:"40px",
						  color:colorForStatus((dash = Dark))[900], width: '49px',
						  height: mobile?'24px':'40px',borderRadius:'20px',marginLeft:'6px',fontSize:mobile?'10px':'18px',textTransform:'none'
						}}
									onClick={(e) => {
										if (Dark === null) {
											setDark("Dark");
											setValue("word7", "Dark")
											
										}
										else {
											setDark(null);
						setValue("word7",null)
										}
							}} >Dark</Button>
					<Button label="Deep"  variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Deep))[100],
							
							minWidth:"40px",
						  color:colorForStatus((dash = Deep))[900], width: '54px',
						  height: mobile?'24px':'40px',borderRadius:'20px',marginLeft:'6px',fontSize:mobile?'10px':'18px',textTransform:'none'
						}}
									onClick={(e) => {
										if (Deep === null) {
											setDeep("Deep");
											setValue("word8", "Deep")
										}
										else {
											setDeep(null);
					                    setValue("word8", null)
										}
							
				  }} >Deep</Button>
					<Button label="Diverse" variant='outlined'
					   style={{
						  backgroundColor: colorForStatus((status = Diverse))[100],
						   
						   minWidth:"40px",
						  color:colorForStatus((dash = Diverse))[900], width: '52px',
						   height:mobile?'24px': '40px', borderRadius: '20px', marginLeft:'6px',fontSize:mobile?'10px':'18px',textTransform:'none'
									}} onClick={(e) => {
										if (Diverse === null) {
											setDiverse("Diverse");
											setValue("word9","Diverse")
										}
										else {
											setDiverse(null);
											setValue("word9", null)
										}
							}} >Diverse</Button>
					<Button label="Educational" variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Educational))[100],
							
							minWidth:"40px",
						  color:colorForStatus((dash = Educational))[900], width: '72px',
						  height:mobile?'24px': '40px',borderRadius:'20px',marginLeft:'6px',fontSize:mobile?'10px':'18px',textTransform:'none'
									}} onClick={(e) => {
										if (Educational === null) {
											setEducational("Educational");
											setValue("word10", "Educational")
										}
										else {
											setEducational(null);
										setValue("word10", null)
										}
							
									}}>Educational</Button>
								<br/>
					<Button label="Empowering"  variant='outlined'
					  style={{
						  backgroundColor: colorForStatus((status = Empowering))[100],
						
						  minWidth:"40px",
						  color:colorForStatus((dash = Empowering))[900],width: '72px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'6px',marginTop:"6px"
						  
									}} onClick={(e) => {
										if (Empowering === null) {
											setEmpowering("Empowering");
											setValue("words11", "Empowering");
										}
										else {
											setEmpowering(null);
							setValue("words11", null);
										}
							
						}} >Empowering</Button>
				  <Button label="Emotional" variant='outlined'
					  style={{
						  backgroundColor: colorForStatus((status = Emotional))[100],
						 
						  minWidth:"40px",
						  color:colorForStatus((dash = Emotional))[900],width: '73px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'6px',marginTop:"6px"
									}} onClick={(e) => {
										if (Emotional === null) {
											setEmotional("Emotional");
											setValue("word12", "Emotional");
										}
										else {
											setEmotional(null);
							setValue("word12", null);
										}
							
						}} >Emotional</Button>
					<Button label="Fictional" variant='outlined'
					   style={{
						  backgroundColor: colorForStatus((status = Fictional))[100],
						   
						   minWidth:"40px",
						  color:colorForStatus((dash = Fictional))[900],width: '71px',
						  height:mobile?'24px': '40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'6px',marginTop:"6px"
									}} onClick={(e) => {
										if (Fictional === null) {
											setFictional("Fictional");
											setValue("words13", "Fictional");
										}
										else {
											setFictional(null);
										setValue("words13", null);
										}
							          	
									}} >Fictional</Button>
					<Button label="Funny"  variant='outlined'
						style={{
						  backgroundColor: colorForStatus((status = Funny))[100],
							
							minWidth:"40px",
						  color:colorForStatus((dash = Funny))[900],width: '51px',
						  height: mobile?'24px':'40px',borderRadius:'20px',fontSize:mobile?'10px':"18px",textTransform:'none',marginLeft:'6px',marginTop:"6px"
									}} onClick={(e) => {
										if (Funny === null) {
											setFunny("Funny");
											setValue("words14","Funny")
										}
										else {
											setFunny(null);
						setValue("words14",null)
										}
							}}>Funny </Button>
					<Button label="Futuristic" variant='outlined'
						style={{backgroundColor: colorForStatus((status = Futuristic))[100],
						
							minWidth:"40px",
						  color:colorForStatus((dash = Futuristic))[900],width: '71px',
						  height: mobile?'24px':'40px',borderRadius:'20px',fontSize:mobile?'10px':'18px',textTransform:'none',marginLeft:'6px',marginTop:"6px"
						   
									}} onClick={(e) => {
										if (Futuristic === null) {
											setFuturistic("Futuristic");
											setValue("words15", "Futuristics")
										}
										else {
											setFuturistic(null);
											setValue("words15", null);
										}
							
									}}>Futuristic</Button>
									</Grid>
						  </>}
						
						
						
    </Grid>
				  </Grid>
				  <Grid container>
				<Grid item md={12}sx={{textAlign:'initial'}}  >
						  <Typography sx={{ml:mobile?"16px":'84px',marginTop:mobile?'24px':'56px',fontSize:mobile?'12px': '18px'}}>How many words are there in your book?</Typography>
				</Grid>
					<Grid item md={6} xs={10} sx={{ marginLeft: mobile ? "16px" : "84px", marginTop: mobile ? '12px' : "32px", '& .MuiTextField-root': {  width: mobile ? "222px":'582px',height:'40px' },}}>
						<TextField placeholder='Write here'
							id="Wordsbook"
							name="Wordsbook"
							    
							margin="dense"
							{...register('Wordsbook')}
							error={errors.Comments ? true : false}
							inputProps={{ style: { padding:mobile?'8px 8px':'14.5px 16px' } }}
							 />
					  </Grid>
				  </Grid>
				  <Grid container md={12} xs={12}>
				<Grid item md={12} sx={{ textAlign: 'initial' }}>
					
					<Typography sx={{ml:mobile?"16px":'84px',marginTop:mobile?'12px':'56px',fontSize:mobile?'12px': '18px'}}>Additional comments (Optional)</Typography>
				</Grid>
					<Grid item md={6} xs={10} sx={{marginLeft:mobile?"16px":"84px",marginTop:mobile?'12px':"32px"}}>
						  <TextField 
							 required
							 id="Comments"
							 name="Comments"
							 placeholder="Write additional comments here "
							fullWidth	
							
						multiline
						rows={mobile?2:4}
							 margin="dense"
							 {...register('Comments')}
							 error={errors.Comments ? true : false}
        />
					  </Grid>
					  </Grid>
			<Grid container md={12}>
					  <Button
              variant="contained"
              color="primary"
				onClick={handleSubmit(onSubmit)}
				sx={{marginTop:mobile?'12px':'56px',marginLeft:mobile?'16px':'82px',textTransform: 'none',fontWeight:'500',fontSize:mobile?'12px':'16px',borderRadius:'8px',width: mobile?'52px':'91px',
				height: mobile?'36px':'48px',marginBottom:mobile?"":"56px"}}
            >
              Submit
					</Button>
					<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Order Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <CheckCircleOutlineIcon /> Thank you for your order! We have
              received your order and will process it shortly.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Dialog>
				</Grid>
			</Paper>
	{/* {mobile?<DashboardFooter />:''}		 */}
		</Box>
		
		</>
  );
}
export default Editing
