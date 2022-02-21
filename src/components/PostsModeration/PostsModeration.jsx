import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';

import GetFile from "./GetFile/index";
import Posts from './Posts/index';
import PostItem from "./PostItem";

const Container = styled.div`
  padding: 30px;
`

const PostsList = styled.ul`
  padding: 10px;
`

export const PostsModeration = ({posts, getPosts}) => {
    const [selectedPost, setSelectedPost] = useState();

    useEffect(() =>{
        getPosts();
    },[])

    return (
        <Container className="container">
            <Button>Создать пост</Button>
            <Container>
                <PostsList>
                    { posts.map((item) => <PostItem selectPost={setSelectedPost} post={item} key={`post ${item.title}`} />) }
                </PostsList>
                <Posts post={selectedPost}/>
            </Container>
            <GetFile />
        </Container>
    );
}