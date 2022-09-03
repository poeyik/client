import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

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

    }

    return(
        <div>
            <div>
                <form name="write_form" onSubmit={submitUser}>
                    <div>
                        <TextField name="id" onChange={changeValue} id="outlined-basic" label="아이디" variant="outlined" />
                    </div>
                    <div>
                        <TextField name="password" onChange={changeValue} id="outlined-basic" label="비밀번호" variant="outlined" />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" >로그인</Button>
                    </div>
                </form>
                <div>
                    <Link to="/signup">회원가입</Link>
                </div>
            </div>
        </div>
    )
}