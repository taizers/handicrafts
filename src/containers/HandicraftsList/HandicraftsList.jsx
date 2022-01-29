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
    justify-content: space-around;
`

const list = [
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
    {
        url: "https://reqres.in/img/faces/2-image.jpg",
        title: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16",
    },
]

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