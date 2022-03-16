import styled from "styled-components";
import {Link} from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import CheckIcon from '@atlaskit/icon/glyph/check';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import React from "react";

const Item = styled.li`
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  
  
  border: 1px solid #b2b2b2;
  transition: border-color 0.4s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
  
  &:hover {
    border-color: #d65a37;
    -webkit-box-shadow: 3px 10px 29px -10px rgb(0 0 0 / 55%);
    box-shadow: 3px 10px 29px -10px rgb(0 0 0 / 55%);
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 20px;
`

const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
`

const CommentWrapper = styled.div`
    width: 100%;
`

const ButtonsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-self: flex-end;
`

const Text = styled.p`
  text-align: left;
  text-indent: 20px;
  
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const LinkToPost = styled(Link)`
  margin-top: 10px;
  margin-bottom: 20px;
  display: inline-block;
  color: blue;
  text-indent: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`

const TextContainer = styled.div`
  text-align: left;
  text-indent: 20px;
  word-wrap: break-word;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getText = (textList) => {
    const text = textList.split('\r\n')
    return <TextContainer>
        {text.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Comment = ({ comment, deleteComment, editComment }) => {
    const onDeleteButtonClick = () => {
        deleteComment({postId: comment.post_id, commenId:comment.id});
    };

    const onApproveButtonClick = () => {
        editComment({
            postId: comment.post_id, 
            commenId:comment.id, 
            comment:{moderated: true}
        });
    };

    return (
        <Item>
            <CommentWrapper>
                <UserInfo>
                    <Avatar src={comment?.user.avatar} size="large"/>
                    <Name>{`${comment.user.email} ${`(${comment.user.name})`}`}</Name>
                </UserInfo>
                <LinkToPost to={'post/' + comment.post_id}>{comment.postTitle}</LinkToPost>
                {comment.text && getText(comment.text)}
            </CommentWrapper>
            <ButtonsContainer>
                {!comment.moderated &&
                    <Button
                        style={{
                            marginRight: '15px',
                        }}
                        iconBefore={<CheckIcon size="large" appearance="primary" primaryColor="green"/>}
                        onClick={onApproveButtonClick}
                    ></Button>
                }
                <Button
                    iconBefore={<TrashIcon size="large" appearance="primary"/>}
                    onClick={onDeleteButtonClick}
                ></Button>
            </ButtonsContainer>
        </Item>
    );
}
