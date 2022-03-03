import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import { map } from 'lodash';
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

export const HandicraftsList = ({ getPosts, posts }) => {
    let { type } = useParams();
    useEffect(() => {
        getPosts(type);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    return <Container className="container">
        <List>
            {map(posts, (item, index) => <HandicraftItem key={index + item.title} post={item}/>)}
        </List>
    </Container>
};
