import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useState } from 'react';
import { styledButton } from '../../../../styles/button';

import Button from '@atlaskit/button/standard-button';
import MoreVerticalIcon from '@atlaskit/icon/glyph/more-vertical';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Avatar from '@atlaskit/avatar';

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

const CommentImage = styled.img`
    height: 100px;
    weight: 100px;
    margin-right: 20px;
    border-radius: 50%;
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

const DeleteCommentButton = styled(styledButton)`
`

const SettingsCommentButton = styled.button`
    transform: rotate(90deg);
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: -1px;

    &:hover {
        font-size: 20px;
    }
`

const CommentButtonsContainer = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    max-height: 40px;
    display: flex;
    gap: 20px;
`

const SettingsList = styled.ul`
    position: absolute;
    top: 10px;
    right: 10px;
    max-height: 40px;
`

const SettingsItem = styled.li`
    background-color: gray;
    padding: 5px 10px;
    font-size: 14px;
    color: white;

    -webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

    &:hover {
        color: gray;
        background-color: white;
    }
`

export const Comment = ({ comment, currentUserId, currentUserRole, signedIn, deleteComment, editingComment }) => {
    const { text, userId, isEdited, _id } = comment;
    const [isCommentSettingsActive, setCommentSettingsActive] = useState(false);

    const onDeleteButtonClick = () => {
        deleteComment(_id);
        setCommentSettingsActive(!isCommentSettingsActive);
    };

    const onEditButtonClick = () => {
        setCommentSettingsActive(!isCommentSettingsActive);
        const commentData = {
            id: _id,
            text: text,
        }
        editingComment(commentData);
    };

    const onCopyButtonClick = () => {
        navigator.clipboard.writeText(text);
        setCommentSettingsActive(!isCommentSettingsActive);
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
                        {(userId === currentUserId) && <DropdownItem onClick={onEditButtonClick}>Изменить</DropdownItem>}
                        {((currentUserRole === 'admin') || (currentUserRole === 'owner') || (userId === currentUserId)) && <DropdownItem onClick={onDeleteButtonClick}>Удалить</DropdownItem>}
                    </DropdownItemGroup>
                </DropdownMenu>    
            </DropContainer>
            
            {/* <SettingsCommentButton onClick={() => setCommentSettingsActive(!isCommentSettingsActive)}>...</SettingsCommentButton> */}
            
{/*             {isCommentSettingsActive && <SettingsList>
                <SettingsItem onClick={onCopyButtonClick}>
                    Копировать
                </SettingsItem>
                {(userId === currentUserId) && <SettingsItem onClick={onEditButtonClick}>
                    Изменить
                </SettingsItem>}
               {((currentUserRole === 'admin') || (currentUserRole === 'owner') || (userId === currentUserId)) && <SettingsItem onClick={onDeleteButtonClick}>
                    Удалить
                </SettingsItem>}
            </SettingsList> } */}
            <Avatar src="https://reqres.in/img/faces/2-image.jpg" size="xlarge" />
            <Text>{text}</Text>

            {isEdited && <IsEdited>Редактировано</IsEdited>}
        </CommentItem>
    );
}