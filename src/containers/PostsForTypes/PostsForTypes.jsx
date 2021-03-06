import styled from "styled-components";
import { useEffect } from "react";
import { map } from 'lodash';

import HandicraftItem from "../HandicraftsList/HandicraftItem/index";

const Container = styled.div`
`

const List = styled.ul`
    margin: 20px 0;
    margin-right: -30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const PostsForTypes = ({ types, getTypes }) => {
    useEffect(() => {
        getTypes()
    }, []);

    return (
        <Container className="container">
            <List>
                {types && map(types, (item) => <HandicraftItem key={item.value} post={item} />)}
            </List>
        </Container>
    );
};
