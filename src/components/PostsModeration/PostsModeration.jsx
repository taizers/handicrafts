import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import { isEmpty } from 'lodash';

import Posts from './Posts/index';
import PostItem from "./PostItem";

const Container = styled.div`
  padding: 15px;
  width: 100%;
  height: 60vh;
`

const ContainerInner = styled(Container)`
  display: flex;
`

const PostsList = styled.ul`
  padding: 10px;
  border: black 1px solid;
  width: 40%;
  height: 100%;
  overflow-y: auto;
`
const Post = styled.div`
  padding: 10px;
  border: black 1px solid;
  border-left: none;
  width: 60%;
  height: 100%;
`

export const PostsModeration = ({ posts, getPosts }) => {
    const [selectedPost, setSelectedPost] = useState();
    console.log(selectedPost);
    useEffect(() =>{
        console.log("323");
        getPosts();
    },[])

    return (
        <Container className="container">
            <Button>Создать пост</Button>
            <ContainerInner>
                <PostsList>
                    {!isEmpty(posts) && posts.map((item) => <PostItem selectedPost={selectedPost} selectPost={setSelectedPost} post={item} key={`post ${item.title}`} />) }
                </PostsList>
                <Post>{selectedPost && <Posts post={selectedPost}/>}</Post>
            </ContainerInner>

        </Container>
    );
}