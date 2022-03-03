import styled from "styled-components";
import { map, toLower, indexOf, isUndefined, filter } from 'lodash';
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
            console.log(((query.userLogin !== "") ? indexOf(toLower(comment.userLogin), toLower(query.userLogin)) !== -1 : true ));
            if (
                ((query.userLogin !== "") ? indexOf(toLower(comment.userLogin), toLower(query.userLogin)) !== -1 : true ) &&
                ((query.postTitle !== "") ? indexOf(toLower(comment.postTitle), toLower(query.postTitle)) !== -1 : true ) &&
                ((query.text !== "") ? indexOf(toLower(comment.text), toLower(query.text)) !== -1 : true )
            ) {
                console.log(comment);
                return comment;
            }
        });
        console.log(arr);
        setCommentsList(arr);
    };

    const getUsersList = comments => map(comments, comment =>
        <Comment comment={comment} key={comment.id} deleteComment={deleteComment} editComment={editComment} />
    );

    return (<Container>
            <Filters search={onSearchUsers} />
            <List>
                {commentsList ? getUsersList(commentsList) : getUsersList(comments)}
            </List>
    </Container>
    );
}