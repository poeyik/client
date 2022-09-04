import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.svg";

export default function EnterInfo(){
    const [userInfo, setUserInfo] = useState({
        id: null,
        password: null,
        email: null
    });
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    const changeValue = (e)=>{
        setUserInfo({
           ...userInfo,
           [e.target.name]: e.target.value
        })
    }

    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
    }

    const isNotSame = ()=>{
        return userInfo.password != confirmPassword ? true : false;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(userInfo.password != confirmPassword){
            return alert('비밀번호가 다릅니다.');
        }

        console.log(userInfo);
        axios.post("/signup",
        userInfo,
        {
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        }).then(res=>{
            navigate('/login');
        }).then(
            
        );
    }

    return(
        <div>
            <Container component="main" maxWidth="xs">
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column'}}>
                    <img src={logo}></img>
                    <Box component="form" onSubmit={handleSubmit}  >
                        <div>
                            <TextField name="id" onChange={changeValue} id="id" label="아이디" variant="outlined" margin="dense" fullWidth/>
                        </div>
                        <div>
                            <TextField name="password" onChange={changeValue} id="password" label="비밀번호" variant="outlined" margin="dense" fullWidth type="password"/>
                        </div>
                        <div>
                            <TextField name="confirmPassword" id="confirmPassword" onChange={handleConfirmPassword} error={isNotSame()} label="비밀번호 재확인" variant="outlined" margin="dense" fullWidth type="password"/>
                        </div>
                        <div>
                            <TextField name="email" onChange={changeValue} id="outlined-basic" label="이메일" variant="outlined" margin="dense"  fullWidth/>
                        </div>
                        <div>
                            <Button type="submit" variant="contained" fullWidth sx={{mt:2, mb:2}}>가입하기</Button>
                        </div>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}