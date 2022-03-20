import styled from "styled-components";
import { map, toLower, indexOf, isUndefined, filter, toString } from 'lodash';
import React, {useEffect, useState} from 'react';
import Comment from './Comment/index'
import Filters from './Filters/index';

const List = styled.ul`
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
`

export const CommentModeration = ({ comments, getComments, deleteComment, editComment }) => {
    const [commentsList, setCommentsList] = useState();

    useEffect(() => {
        getComments();
    }, []);

    const onSearchUsers = (query) => {
        const arr = filter(comments, comment => {
            if (
                ((query.userLogin !== "") ? toLower(comment.user.email).indexOf(toLower(toString(query.userLogin))) !== -1 : true ) &&
                ((query.text !== "") ? toLower(comment.text).indexOf(toLower(toString(query.text))) !== -1 : true )
            ) {
                return comment;
            }
        });
        console.log(arr);
        setCommentsList(arr);
    };

    const getCommentsList = comments => map(comments, comment =>
        <Comment comment={comment} key={comment.id} deleteComment={deleteComment} editComment={editComment} />
    );

    return (<Container>
            <Filters search={onSearchUsers} />
            <List>
                {commentsList ? getCommentsList(commentsList) : getCommentsList(comments)}
            </List>
    </Container>
    );
}