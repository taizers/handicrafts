import styled from 'styled-components';
import { Link, useRouteMatch, generatePath } from 'react-router-dom';
import moment from 'moment';
import { isArray, isEmpty } from 'lodash';

import { pathToPost, pathToPosts, API_IMAGE_URL } from '../../../constants';

const Item = styled.li`
    max-width: 250px;
    word-wrap: break-word;
    margin-right: 30px;
    overflow: hidden;
    margin-bottom: 20px;
    
    &:hover {
      border-color: #d65a37;
      -webkit-box-shadow: 3px 10px 29px -10px rgb(0 0 0 / 55%);
      box-shadow: 3px 10px 29px -10px rgb(0 0 0 / 55%);
    }

    a {
        display: block;
    }
    
    a img {
        transition: .3s;
    }

    a:hover img {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.3) rotateZ(-5deg);
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

const ImageWrapper = styled.div`
    width: 220px;
    height: 120px;
    overflow: hidden;
`

export const HandicraftItem = ({ post }) => {
    return <Item>
            <Link to={post.title ? generatePath(pathToPost, {id: post.id}) : generatePath(pathToPosts, {type: post.value})}>
            <ImageWrapper>
                <ItemImage src={isArray(post?.images) ? `${API_IMAGE_URL}${post?.images[0].image}` : `${API_IMAGE_URL}${post?.image}`} alt={post.title ? post.title : post.label} height='100' width='200' />
            </ImageWrapper>    
                <TextContainer>
                    <ItemTitle>{post.title ? post.title : post.label}</ItemTitle>
                    <Date>{post.date && `Будет ${moment(post.date).format('LL')}`}</Date>
                </TextContainer>
            </Link>
        </Item>
};

