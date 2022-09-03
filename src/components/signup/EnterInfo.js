import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function EnterInfo(){
    const [userInfo, setUserInfo] = useState();

    const changeValue = (e)=>{

    }

    const submitUser = (e)=>{
        e.preventDefault();
    }

    return(
        <div>
            <form>
                <div>
                    <TextField name="id" onChange={changeValue} id="outlined-basic" label="아이디" variant="outlined" />
                </div>
                <div>
                    <TextField name="password" onChange={changeValue} id="outlined-basic" label="비밀번호" variant="outlined" />
                </div>
                <div>
                    <TextField name="password2" onChange={changeValue} id="outlined-basic" label="비밀번호 재확인" variant="outlined" />
                </div>
                <div>
                    <TextField name="email" onChange={changeValue} id="outlined-basic" label="이메일" variant="outlined" />
                </div>
                <div>
                    <Button type="submit" variant="contained" >가입하기</Button>
                </div>
            </form>
        </div>
    )
}