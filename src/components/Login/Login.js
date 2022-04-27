import { React, useRef, useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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


	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/home");
	}
  return (
    <Box
		 component = "form"
		 noValidate
		 autoComplete="off"
		 sx={{
            marginTop: 4,
			 marginBottom:50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
			mt: 1
          }}
		 >
				<TextField
					sx={{ mt: 1, mb: 3, width: '11%'}}
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
					sx={{ mt: 1, mb: 6, width: '11%'}}
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					id="outlined-password-input"
					label="Password"
					type="password"
				/>
				<Button 
				onClick={handleClick}
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

