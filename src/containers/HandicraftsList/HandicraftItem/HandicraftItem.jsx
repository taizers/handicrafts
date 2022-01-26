import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.li`
    max-width: 250px;
    word-wrap: break-word;
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

export const HandicraftItem = ({id, title, url}) => {
    return <Item>
            <ItemLink to={id.toString()}>
                <ItemImage src={url} alt="handicraft" height='100' width='200' />
                <ItemTitle>{title}</ItemTitle>
            </ItemLink>
        </Item>
};
