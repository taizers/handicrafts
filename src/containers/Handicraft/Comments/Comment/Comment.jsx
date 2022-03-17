import styled from 'styled-components';

import Button from '@atlaskit/button/standard-button';
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar';
import {API_AVATAR_IMAGE_URL} from "../../../../constants";
import React from "react";

const IsEdited = styled.p`
    position: absolute;
    bottom: 5px;
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

const CommentItem = styled.li`
    background-color: white;
    color: black;
    padding: 20px 20px;
    margin-top: 30px;
    display: flex;
    position: relative;
`

const DropContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`

const TextContainer = styled.div`
  text-align: left;
  text-indent: 20px;
  word-wrap: break-word;
  max-width: 85%;
  padding-left: 10px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Text = styled.p`
  text-indent: 40px;
  margin: 10px 0;
  font-size: 17px;
`
const getText = (textList) => {
    const text = textList.split('\r\n')
    return <TextContainer>
        {text.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Comment = ({ commentData, currentUserId, currentUserRole, deleteComment, moderateComment, editingComment, isNotEdit }) => {
    const { text, user, edited, id, moderated, created_at, updated_at, post_id } = commentData;

    const onDeleteButtonClick = () => {
        deleteComment({postId: post_id, commentId: id});
    };

    const onEditButtonClick = () => {
        const commentData = {
            id: id,
            text: text,
        }
        editingComment(commentData);
    };

    const onModeratedButtonClick = () => {
        const comment = {
            moderated: true,
        }
        moderateComment({comment, postId: post_id, commentId: id});
    };

    const onCopyButtonClick = () => {
        navigator.clipboard.writeText(text);
    };

    return (
        <CommentItem>
            <DropContainer>
                <DropdownMenu
                    size="small"
                    placement="bottom-end"
                    trigger={({ triggerRef, ...props }) => (
                        <Button
                        {...props}
                        iconBefore={<MoreVerticalIcon label="more" size="small" />}
                        ref={triggerRef}
                        />
                    )}
                >
                    <DropdownItemGroup size="small">
                        <DropdownItem size="small" onClick={onCopyButtonClick}>Копировать</DropdownItem>
                        {((user.id === currentUserId) && !isNotEdit) && <DropdownItem onClick={onEditButtonClick}>Изменить</DropdownItem>}
                        {((currentUserRole === 'admin') || (currentUserRole === 'owner') || (user.id === currentUserId)) && <DropdownItem onClick={onDeleteButtonClick}>Удалить</DropdownItem>}
                        {(((currentUserRole === 'admin') || (currentUserRole === 'owner')) && !moderated) && <DropdownItem onClick={onModeratedButtonClick}>Одобрить</DropdownItem>}
                    </DropdownItemGroup>
                </DropdownMenu>    
            </DropContainer>
            <Avatar src={`${API_AVATAR_IMAGE_URL}${user.avatar}`} size="xlarge" />
            {getText(text)}

            {edited && <IsEdited>Редактировано</IsEdited>}
        </CommentItem>
    );
}
