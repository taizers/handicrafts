import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
    pathToSignIn,
    pathToSignUp,
    pathToProfile,
    pathToHandicrafts,
    pathToMap,
} from '../../constants';
import { styledButton } from '../../styles/button';
import Icons from '../Icons/Icons';

const List = styled.ul`
    margin: 0 auto;
    display: flex;
    gap: 20px;
`

const Item = styled.li`
    min-width: 200px;
    height: 100px;
`

export const Handicrafts = () => {
    return (
        <List>
            <Item>
                <img src="#" alt="handicraft" height='200' width='100' />
            </Item>
            <Item>
                <img src="#" alt="handicraft" height='200' width='100' />
            </Item>
            <Item>
                <img src="#" alt="handicraft" height='200' width='100' />
            </Item>
            <Item>
                <img src="#" alt="handicraft" height='200' width='100' />
            </Item>
            <Item>
                <img src="#" alt="handicraft" height='200' width='100' />
            </Item>
        </List>
    );
};