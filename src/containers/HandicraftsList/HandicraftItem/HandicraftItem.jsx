import styled from 'styled-components';
import { Link, useRouteMatch, generatePath } from 'react-router-dom';
import { pathToPost } from '../../../constants';

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
    const {id, images, title, createdAt} = post;

    return <Item>
            <Link to={generatePath(pathToPost, {id: id})}>
                <ItemImage src={images[0]} alt={title} height='100' width='200' />
                <TextContainer>
                    <ItemTitle>{title}</ItemTitle>
                    <Date>{createdAt}</Date>
                </TextContainer>
            </Link>
        </Item>
};
