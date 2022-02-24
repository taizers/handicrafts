import styled from "styled-components";
import { map } from 'lodash';
import { useEffect } from 'react';
import Comment from './Comment/index'

const List = styled.ul`
    width: 100%;
`

export const CommentModeration = ({ comments, getComments, deleteComment, editComment }) => {
    useEffect(() => {
        getComments();
    }, [])

    return (
        <List>
            {map((comments), (comment) => <Comment comment={comment} key={comment.id} deleteComment={deleteComment} editComment={editComment} />)}
        </List>
    );
}