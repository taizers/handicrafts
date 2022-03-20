import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import { map } from 'lodash';
import HandicraftItem from './HandicraftItem/index';
import { useEffect } from 'react';

const Container = styled.div`
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: -30px;
`

export const HandicraftsList = ({ getPosts, posts }) => {
    let { type } = useParams();
    useEffect(() => {
        getPosts(type);
      }, []);

    return <Container>
        <List>
            {map(type ? posts.filter((post) => !!post.type) : posts,
            (item, index) => <HandicraftItem key={index + item.id} post={item}/>)}
        </List>
    </Container>
};
