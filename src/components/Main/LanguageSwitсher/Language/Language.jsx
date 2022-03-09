import styled from 'styled-components';
import { flags } from '../../../../locales/locales';

const ListItem = styled.li`
    margin: 5px;
`
const Image = styled.img`
    width: 50px;
    height: 30px;
`

export const Language = ({ onLanguageClick, language }) => {
    const onClick = () => {
        onLanguageClick(language)
    }

    return (
        <ListItem>
            <Image src={flags[language]} alt={language} onClick={onClick} />
        </ListItem>
    );
}