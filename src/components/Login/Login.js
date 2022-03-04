import { useRef, useState,useEffect } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Login = () =>  {
	const userRef = useRef();
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		userRef.current.focus();
	},[]);
  return (
    <Box
		 component = "form"
		 noValidate
		 autoComplete="off"
		 sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
			mt: 1
          }}
		 >
				<TextField
					sx={{ mt: 1, mb: 1, width: '11%'}}
					autoFocus
					ref={userRef}
					onChange={(e) => setUser(e.target.value)}
					value={user}
					defaultValue="User Name"
					label="User Name"
					id="outlined-required"
				/>
					<TextField
					margin="normal"
					required
					sx={{ mt: 1, mb: 1, width: '11%'}}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					id="outlined-password-input"
					label="Password"
					type="password"
				/>
				<Grid container sx={{ mr: 10, width: '11%'}} >
				<Grid item xs>
					<Link href="#" variant="body2">
					Forgot password?
					</Link>
				</Grid>
				</Grid>	
				<FormControlLabel
				    sx={{ mr: 1, width: '11%'}}
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Button 
				variant="contained" 
				sx={{ mt: 1, mb: 2, width: '11%'}}
				style={{
                backgroundColor: "green",
                color: "white"
              	}}>
					Sign in
					</Button>

			</Box>
  )
}

export default Login

