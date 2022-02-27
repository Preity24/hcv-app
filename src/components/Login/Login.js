import { useRef, useState,useEffect } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
		 >
				<TextField
					ref={userRef}
					onChange={(e) => setUser(e.target.value)}
					value={user}
					defaultValue="User Name"
					label="User Name"
					id="outlined-required"
				/>
					<TextField
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					id="outlined-password-input"
          label="Password"
          type="password"
				/>
				<Button variant="contained">Sign in</Button>
			</Box>
  )
}

export default Login

