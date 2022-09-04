import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BoardList(){
    const [boards, setBoards] = useState([]);

    useEffect();

    return(
        <div>
            <div>
                <div>
                    {boards.map((board)=>(
                        <div>
                            <Link to={`/boardlist/${board.id}`}>{board.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}