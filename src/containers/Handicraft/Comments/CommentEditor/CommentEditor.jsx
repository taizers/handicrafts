import styled from 'styled-components';
import { styledButton } from '../../../../styles/button';
import { useState, useEffect } from 'react';

const CommentEditorArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: transparent;
  border-color: white;
  padding: 10px 10px;
`

const EditCommentButton = styled(styledButton)`
  margin-left: auto;
`

const EditCommentContainer = styled.div`
`

export const CommentEditor = ({ comment, postId, createComment, editComment, signedIn }) => {
    let [commentText, setCommentText] = useState('');

    const onCreateComment = () => {
      const comment = {
        text: commentText,
        isEdited: false,
        isModerated: false,
      };

      createComment({comment, postId});
    };

    const onChangeComment = () => {
      const commentData = {
        text: commentText,
        isEdited: true,
      };

      editComment({comment: commentData, postId, commentId: comment.id});
    };

    return (
      <EditCommentContainer>
          <CommentEditorArea defaultValue={comment?.text} placeholder={signedIn ? "Введите ваш комментарий" : "Авторизуйтесь чтобы написать комментарий"} onChange={(evt) => setCommentText(evt.currentTarget.value)}>
          </CommentEditorArea>
          <EditCommentButton disable={!signedIn} onClick={!comment ? onCreateComment : onChangeComment}>Отправить</EditCommentButton>
      </EditCommentContainer>
    );
}