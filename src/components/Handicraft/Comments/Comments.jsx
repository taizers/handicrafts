import styled from 'styled-components';
import Comment from './Comment/index';
import CommentEditor from './CommentEditor/index';
import { useState } from 'react';

const CommentsList = styled.ul`
    text-align: center;
    margin: 20px auto;
    max-width: 800px;
    margin-top: 100px;
`

export const Comments = ({ comments, postId }) => {
    let [currentEditComment, setCurrentEditComment] = useState();

    const setCurrentEditingComment = (comment) => {
        setCurrentEditComment(comment);
    };

    return (
        <CommentsList>
            {comments.map( (item, index) => <Comment editingComment={setCurrentEditingComment} comment={item} key={'comment' + index} /> )}
            <CommentEditor comment={currentEditComment}  postId={postId} />
        </CommentsList>
    );
}
