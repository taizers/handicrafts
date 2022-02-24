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

export const CommentEditor = ({ comment, postId, createComment, editComment, currentUserId, signedIn }) => {
    let [commentText, setCommentText] = useState('');

 /*    useEffect(() => {

    },[]) */

    const onCreateComment = () => {
      const createdComment = {
        postId: postId,
        text: commentText,
        isEdited: false,
        userId: currentUserId,
      };

      console.log(createdComment);

      createComment(createdComment);
    };

    const onChangeComment = () => {
      const changedComment = {
        text: commentText,
        isEdited: true,
      };

      editComment(changedComment);
    };

    return (
      <EditCommentContainer>
          <CommentEditorArea defaultValue={comment?.text} placeholder={signedIn ? "Введите ваш комментарий" : "Авторизуйтесь чтобы написать комментарий"} onChange={(evt) => setCommentText(evt.currentTarget.value)}>
          </CommentEditorArea>
          {signedIn && <EditCommentButton onClick={comment ? onCreateComment : onChangeComment}>Отправить</EditCommentButton>}
      </EditCommentContainer>
    );
}