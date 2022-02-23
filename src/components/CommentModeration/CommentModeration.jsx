import styled from "styled-components";
import { map } from 'lodash';
import { useEffect } from 'react';
import Comment from './Comment/index'

const List = styled.ul`
`

export const CommentModeration = ({ comments, getComments }) => {
    useEffect(() => {
        getComments();
    }, [])
    console.log(comments);
    return (
        <List>
            {map((comments), (comment) => <Comment comment={comment} key={comment.id} />)}
        </List>
    );
}