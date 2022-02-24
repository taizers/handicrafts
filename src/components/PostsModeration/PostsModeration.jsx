import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import { isEmpty } from 'lodash';
import CreateModal from "./CreateModal";

import Posts from './Posts/index';
import PostItem from "./PostItem";
import AddIcon from "@atlaskit/icon/glyph/add";

const Container = styled.div`
  padding: 15px;
  width: 100%;
  height: 60vh;
`

const ContainerInner = styled(Container)`
  display: flex;
  margin-top: 30px;
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

export const PostsModeration = ({ posts, getPosts, setVisible, isVisible, createPost }) => {
    const [selectedPost, setSelectedPost] = useState();

    useEffect(() =>{
        getPosts();
    },[])

    const onShowModal = () => {
        setVisible(true);
    };

    return (
        <Container className="container">
            <Button
                iconBefore={<AddIcon size="small"/>}
                onClick={onShowModal}
            >
                Создать Пост
            </Button>
            <ContainerInner>
                <PostsList>
                    {!isEmpty(posts) && posts.map((item) => <PostItem selectedPost={selectedPost} selectPost={setSelectedPost} post={item} key={`post ${item.title}`} />) }
                </PostsList>
                <Post>{selectedPost && <Posts post={selectedPost}/>}</Post>
            </ContainerInner>
            <CreateModal setVisible={setVisible} isVisible={isVisible} createPost={createPost} type='post'/>
        </Container>
    );
}