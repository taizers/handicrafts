import styled from "styled-components";
import {Link} from "react-router-dom";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import CheckIcon from '@atlaskit/icon/glyph/check';
import TrashIcon from '@atlaskit/icon/glyph/trash';

const Item = styled.li`
  padding: 10px;
  display: flex;
`

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Login = styled.h3`
    color: gray;
`

const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`

const TextContainer = styled.div`
    margin-left: 15px;
    width: 100%;
`

const ButtonsContainer = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    
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
  &:hover {
    text-decoration: underline;
  }
`

const getText = (text) => {
    const textList = text.split('/*Enter*/');
    return textList.map((elem, index) => <Text key={elem+index}>{elem}</Text>)
}

export const Comment = ({ comment, deleteComment, editComment }) => {
    const onDeleteButtonClick = () => {
        deleteComment(comment.id);
    };

    const onApproveButtonClick = () => {
        editComment({isApproved: true});
    };

    return (
        <Item>
            <Avatar src={comment?.avatar} size="large"/>
            <TextContainer>
                <Name>{`${comment.userLogin || ''} ${`(${comment.userName})` || ''} `}</Name>
                <LinkToPost to={'post/' + comment.postId}>{comment.postTitle}</LinkToPost>
                {comment.text && getText(comment.text)}
            </TextContainer>
            <ButtonsContainer>
                {!comment.isApproved &&
                    <Button
                        style={{
                            marginBottom: '15px',
                        }}
                        iconBefore={<CheckIcon size="large" appearance="primary" primaryColor="green"/>}
                        onClick={onApproveButtonClick}
                    ></Button>
                }
                {console.log(comment)}
                <Button
                    iconBefore={<TrashIcon size="large" appearance="primary"/>}
                    onClick={onDeleteButtonClick}
                ></Button>
            </ButtonsContainer>
        </Item>
    );
}