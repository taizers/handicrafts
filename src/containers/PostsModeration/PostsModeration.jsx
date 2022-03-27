import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Button from '@atlaskit/button';
import {filter, map, toLower} from 'lodash';
import CreateModal from "./CreateModal";
import Filters from './Filters/index';
import moment from 'moment';

import Posts from './Posts/index';
import PostItem from "./PostItem";
import AddIcon from "@atlaskit/icon/glyph/add";
import {FormattedMessage} from "react-intl";

const Container = styled.div`
  width: 100%;
  height: 600px;
  width: 100%;
`

const PostsContainer = styled(Container)`
  display: flex;
  margin-top: 20px
`

const PostsList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

const ListContainer = styled.div`
  border: black 1px solid;
  padding: 10px;
  width: 30%;
  height: 100%;
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
    flex-direction: column;
`

const CreateButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
`

export const PostsModeration = ({ posts, getPosts, setVisible, isVisible, isLoading, createPost }) => {
    const [selectedPost, setSelectedPost] = useState();
    const [postsList, setPostsList] = useState();

    useEffect(() =>{
        getPosts();
    },[])

    const onShowPostsModal = () => {
        setVisible(true);
    };

    const onSearchPosts = (query) => {
        console.log(query.date);
        const arr = filter(posts, post => {
            if (
                ((query.title !== "") ? toLower(post.title).indexOf(toLower(query.title)) !== -1 : true ) &&
                ((query.date !== "") ? moment(post.created_at).format('L') === moment(query.date).format('L') : true )
            ) {
                return post;
            }
        });

        setPostsList(arr);
    };

    const getPostsList = posts => map(posts, post =>
        <PostItem selectedPost={selectedPost} selectPost={setSelectedPost} post={post} key={`post ${post.id}`} />
    );

    return (
        <Container>
            <HeadContainer>
                <Filters search={onSearchPosts} />
                <CreateButtonsWrapper>
                    <Button
                        style={{
                            alignSelf: 'flex-end',
                        }}
                        iconBefore={<AddIcon size="small"/>}
                        onClick={onShowPostsModal}
                        appearance="primary"
                    >
                        <FormattedMessage id="button_create_post" />
                    </Button>
                </CreateButtonsWrapper>
            </HeadContainer>

            <PostsContainer>
                <ListContainer>
                    <PostsList>
                        {postsList ? getPostsList(postsList) : getPostsList(posts)}
                    </PostsList>
                </ListContainer>
                <Post>{selectedPost && <Posts post={selectedPost}/>}</Post>
            </PostsContainer>
            {isVisible && <CreateModal setVisible={setVisible} isLoading={isLoading} isVisible={isVisible} create={createPost} type={'post'}/>}
        </Container>
    );
}
