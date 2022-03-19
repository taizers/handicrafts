import styled from 'styled-components';
import Comment from './Comment/index';
import CommentEditor from './CommentEditor/index';
import { useState } from 'react';
import {isEmpty} from "lodash";

const CommentsList = styled.ul`
    text-align: center;
    word-break: break-word;
    margin: 20px auto;
    width: 85%;
`

export const Comments = ({ comments, postId }) => {
    let [currentEditComment, setCurrentEditComment] = useState('');

    const setCurrentEditingComment = (comment) => {
        setCurrentEditComment(comment);
    };

    const commentsList = comments?.filter((comment)=> comment.moderated === true);

    return (
        <CommentsList>
            {!isEmpty(commentsList) && commentsList.map( (item, index) => <Comment editingComment={setCurrentEditingComment} commentData={item} key={'comment' + index} /> )}
            <CommentEditor comment={currentEditComment}  postId={postId} setCurrentEditComment={setCurrentEditComment} />
        </CommentsList>
    );
}
