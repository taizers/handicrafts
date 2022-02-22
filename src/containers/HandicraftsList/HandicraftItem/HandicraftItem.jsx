import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import {  } from '../../../constants';

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
    margin-top: 10px;
    max-width: 100%;
`
const ItemImage = styled.img`
    height: 150px;
    width: 250px;
`

const ItemLink = styled(Link)`
    height: 150px;
    width: 250px;
`

export const HandicraftItem = ({ post }) => {
    let { path } = useRouteMatch();
    
    const {id, icon, title} = post;

    return <Item>
            <ItemLink to={'post/' + id}>
                <ItemImage src={icon} alt="post image" height='100' width='200' />
                <ItemTitle>{title}</ItemTitle>
            </ItemLink>
        </Item>
};
