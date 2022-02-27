import styled from 'styled-components';

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

export const Comment = ({ comment, currentUserId, currentUserRole, signedIn, deleteComment, moderateComment, editingComment, isNotEdit }) => {
    const { text, userId, isEdited, id, moderated } = comment;

    const onDeleteButtonClick = () => {
        deleteComment(id);
    };

    const onEditButtonClick = () => {
        const commentData = {
            id: id,
            text: text,
        }
        editingComment(commentData);
    };

    const onModeratedButtonClick = () => {
        const commentData = {
            moderated: true,
        }
        moderateComment(commentData);
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
                        {((userId === currentUserId) && !isNotEdit) && <DropdownItem onClick={onEditButtonClick}>Изменить</DropdownItem>}
                        {((currentUserRole === 'admin') || (currentUserRole === 'owner') || (userId === currentUserId)) && <DropdownItem onClick={onDeleteButtonClick}>Удалить</DropdownItem>}
                        {(((currentUserRole === 'admin') || (currentUserRole === 'owner')) && !moderated) && <DropdownItem onClick={onModeratedButtonClick}>Одобрить</DropdownItem>}
                    </DropdownItemGroup>
                </DropdownMenu>    
            </DropContainer>
            {console.log(comment.avatar)}
            <Avatar src={comment?.avatar} size="xlarge" />
            <Text>{text}</Text>

            {isEdited && <IsEdited>Редактировано</IsEdited>}
        </CommentItem>
    );
}