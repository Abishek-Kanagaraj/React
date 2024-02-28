import { useState, useEffect } from "react";
import axios from 'axios'
export default function DataFetching(){
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result =>{
            console.log(result);
            setPosts(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
        <>
        <ol>
            {posts.map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ol>
        </>
    );
}