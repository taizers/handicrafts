import styled from "styled-components";
import { useEffect } from "react";
import { map } from 'lodash';

import HandicraftItem from "../HandicraftsList/HandicraftItem/index";

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
