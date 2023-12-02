'use client'

import { useState ,useEffect} from "react";

export default function MeowArticle() {

    const [text, setText] = useState('데이터준비중..');

    useEffect(() =>{
        fetch('https://meowfacts.herokuapp.com')
        .then((res) => res.json())
        .then((data) => setText(data.data[0]));
    },[]);

     return(
        <div>{text}</div>
     )
}