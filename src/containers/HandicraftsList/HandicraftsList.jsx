import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { styledButton } from '../../styles/button';
import Icons from '../../components/Icons/Icons';
import HandicraftItem from './HandicraftItem/index';
import { useEffect } from 'react';

const Container = styled.div`
`

const List = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: -30px;
`

export const HandicraftsList = ({getHandicraftsList, handicraftsList}) => {
    useEffect(() => {
        getHandicraftsList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return <Container className="container">
        <List>
            { handicraftsList.map( (item, index) => <HandicraftItem key={index + item.url} handicraft={item} /> ) }
        </List>
    </Container>
};