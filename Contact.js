import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import Navbar from './Navbar';
import {Image} from 'mui-image';
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend code to send email
  }

	return (<>
  <Navbar />
		<Grid container spacing={2}>
			<Grid item lg={12}>
				<Typography>Contact Us</Typography>
			</Grid>
		<Grid item xs={12} lg={6}>
	  <Image src="https://drive.google.com/uc?export=view&id=1XN-qsTHzT6LuHEPaKCQ1Cx_S9NdtYarC" width='100%' height='100%' style={{borderRadius:"20px"}} />  
			
      </Grid>
      <Grid item xs={12} lg={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">Send</Button>
        </form>
      </Grid>
     
		</Grid>
		</>
  );
}

export default ContactForm;
