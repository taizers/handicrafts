import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import {filter, indexOf, isEmpty, map, toLower} from 'lodash';
import CreateModal from "./CreateModal";
import Filters from './Filters/index';

import Posts from './Posts/index';
import PostItem from "./PostItem";
import AddIcon from "@atlaskit/icon/glyph/add";

const Container = styled.div`
  padding: 15px;
  width: 100%;
  height: 72vh;
`

const PostsContainer = styled(Container)`
  display: flex;
  margin-top: 20px;
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

const HeadContainer = styled.div`
  display: flex;
`

export const PostsModeration = ({ posts, getPosts, setVisible, isVisible, createPost }) => {
    const [selectedPost, setSelectedPost] = useState();
    const [postsList, setPostsList] = useState();

    useEffect(() =>{
        getPosts();
    },[])

    const onShowModal = () => {
        setVisible(true);
    };

    const onSearchPosts = (query) => {
        const arr = filter(posts, post => {
            if (
                ((query.title !== "") ? indexOf(toLower(post.title), toLower(query.title)) !== -1 : true ) &&
                ((query.date !== "") ? post.createdAt == query.date : true )
            ) {
                return post;
            }
        });

        setPostsList(arr);
    };

    const getPostsList = posts => map(posts, post =>
        <PostItem selectedPost={selectedPost} selectPost={setSelectedPost} post={post} key={`post ${post.title}`} />
    );

    return (
        <Container className="container">
            <HeadContainer>
                <Button
                    style={{
                        alignSelf: 'flex-end',
                        marginRight: '20px',
                    }}
                    iconBefore={<AddIcon size="small"/>}
                    onClick={onShowModal}
                    appearance="primary"
                >
                    Создать Пост
                </Button>
                <Filters search={onSearchPosts} />
            </HeadContainer>

            <PostsContainer>
                <PostsList>
                    {postsList ? getPostsList(postsList) : getPostsList(posts)}
                </PostsList>
                <Post>{selectedPost && <Posts post={selectedPost}/>}</Post>
            </PostsContainer>
            {isVisible && <CreateModal setVisible={setVisible} isVisible={isVisible} createPost={createPost} type='post'/>}
        </Container>
    );
}