import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { styledButton } from '../../../styles/button';

const Text = styled.p`

`

const IsEdited = styled.p`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 10px;
    color: red;

    -webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`

const CommentImage = styled.img`
    height: 100px;
    weight: 100px;
    margin-right: 20px;
    border-radius: 50%;
`

const CommentItem = styled.li`
    background-color: white;
    color: black;
    max-width: 800px;
    padding: 20px 20px;
    margin-top: 40px;
    display: flex;
    position: relative;
`

const EditCommentButton = styled(styledButton)`
`

const DeleteCommentButton = styled(styledButton)`
`

const CommentButtonsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    max-height: 40px;
    display: flex;
    gap: 20px;
`

export const Comment = ({comment}) => {
  return (
    <CommentItem>
        <IsEdited>Редактировано</IsEdited>
        <CommentImage src="https://reqres.in/img/faces/2-image.jpg" height="100" weight="100" ></CommentImage>
        <Text>{comment.comment}</Text>
        {true && <CommentButtonsContainer>
            {true && <EditCommentButton>Редактировать</EditCommentButton>}
            {true && <DeleteCommentButton>Удалить </DeleteCommentButton>}
        </CommentButtonsContainer>}
    </CommentItem>
  );
}