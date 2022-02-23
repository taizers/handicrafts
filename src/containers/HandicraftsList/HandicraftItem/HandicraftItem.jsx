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
    margin-top: 10px;
    max-width: 100%;
`
const ItemImage = styled.img`
    height: 150px;
    width: 250px;
`

export const HandicraftItem = ({ post }) => {
    let { path, url } = useRouteMatch();
    
    const {id, icon, title} = post;
    console.log(path, url);
    return <Item>
            <Link to={generatePath(pathToPost, {id: id})} replace>
                <ItemImage src={icon} alt="post image" height='100' width='200' />
                <ItemTitle>{title}</ItemTitle>
            </Link>
        </Item>
};
