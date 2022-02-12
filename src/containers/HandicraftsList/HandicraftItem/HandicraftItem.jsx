import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

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

export const HandicraftItem = ({handicraft}) => {
    let { path } = useRouteMatch();
    
    const {id, img, title} = handicraft;

    return <Item>
            <ItemLink to={path + '/' + id}>
                <ItemImage src={img} alt="handicraft image" height='100' width='200' />
                <ItemTitle>{title}</ItemTitle>
            </ItemLink>
        </Item>
};
