import styled from 'styled-components';
import { Link, useRouteMatch, generatePath } from 'react-router-dom';

import { isEmpty } from 'lodash';
import { pathToPost, pathToPosts } from '../../../constants';

const Item = styled.li`
    max-width: 250px;
    word-wrap: break-word;
    margin-right: 30px;

    &:hover {
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }
`

const ItemTitle = styled.h3`
    font-weight: 700;
    max-width: 100%;
`
const ItemImage = styled.img`
    height: 150px;
    width: 250px;
`
const Date = styled.p`
  color: #3c3f41;
  font-size: 14px;
`

const TextContainer = styled.div`
  padding: 10px
`

export const HandicraftItem = ({ post }) => {
    return <Item>
            <Link to={post.id ? generatePath(pathToPost, {id: post.id}) : generatePath(pathToPosts, {type: post.value})}>
                <ItemImage src={!isEmpty(post.images) ? post.images[0] : post.image} alt={post.title ? post.title : post.label} height='100' width='200' />
                <TextContainer>
                    <ItemTitle>{post.title ? post.title : post.label}</ItemTitle>
                    {post.createdAt && <Date>{post.createdAt}</Date>}
                </TextContainer>
            </Link>
        </Item>
};
