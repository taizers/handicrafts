import styled from 'styled-components';
import React, { useState, useEffect } from 'react'

import GetFile from "./GetFile/index";
import Posts from './Posts/index';

const Container = styled.div`
  padding: 30px;
`

export const PostsModeration = ({posts, getPosts}) => {

    useEffect(() =>{
        getPosts();
    },[])
    console.log(posts);
    return (
        <Container className="container">
            <GetFile />
            { posts.map((item) => <Posts post={item} key={`post ${item.title}`} />) }
        </Container>
    );
}