import styled from "styled-components";
import { map, isEmpty, isObject } from 'lodash';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import {isString} from "lodash/lang";

const Item = styled.li`
  padding: 10px;
  display: flex;
`

const Image = styled.img`
`

const Login = styled.h3`
    color: gray;
`

const Name = styled.p`
`

const TextContainer = styled.div`
    
`

const Text = styled.p`
`

const LinkToPost = styled(Link)`
  margin-top: 10px;
  margin-bottom: 20px;
`

export const Comment = ({ comment }) => {
    return (
        <Item>
            <Image src={comment.avatar} />
            <TextContainer>
                <Name>{`${comment.userName || ''} ${`(${comment.userLogin})` || ''}`}</Name>
                <LinkToPost to={'post/' + comment.postId}>{comment.postTitle}</LinkToPost>
                <Text>{comment.text}</Text>
            </TextContainer>
        </Item>
    );
}