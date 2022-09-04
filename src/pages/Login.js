import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "@mui/system";
import logo from "../logo.svg";

export default function Login(){
    const [user, setUser] = useState([]);

    const changeValue = (e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const submitUser = (e)=>{
        e.preventDefault();
        console.log(user);
        axios.post("http://localhost:8080/api",
        user,
        {
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        }).then(res=>{

        });
    }

    return(
        <div>
            <Container component="main" maxWidth="xs">
                <Box sx={{marginTop:12, display: 'flex', flexDirection: 'column'}}>
                <img src={logo} alt="logo" fullWidth></img>
                    <Box component="form" onSubmit={submitUser} noValidate sx={{mt:1}}>
                        <div>
                            <TextField name="id" onChange={changeValue} id="id" label="아이디" variant="outlined" margin="dense" fullWidth autoComplete="id" autoFocus />
                        </div>
                        <div>
                            <TextField name="password" onChange={changeValue} id="password" label="비밀번호" variant="outlined" margin="normal" fullWidth type="password" />
                        </div>
                        <div>
                            <Button type="submit" variant="contained" fullWidth sx={{mt:1, mb:2}}>로그인</Button>
                        </div>
                    </Box>
                    <Grid>
                        <Link to="/signup" >회원가입</Link>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}