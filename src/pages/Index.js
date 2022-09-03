import React from "react";
import { Link } from "react-router-dom";

export default function Index(){

    return(
        <div>
            <Link to="/login">로그인</Link> &nbsp;
            <Link to="/signup">회원가입</Link>
        </div>
    )
}