import styled from 'styled-components';
import { flags } from '../../../../locales/locales';

const ListItem = styled.li`
    margin: 5px;
`
const Image = styled.img`
    width: 50px;
    height: 30px;
`

export const Language = ({ setLanguage, language, getWeather, userLocation }) => {
    const onClick = () => {
        setLanguage(language);
        getWeather({language,location: userLocation});
    }

    return (
        <ListItem>
            <Image src={flags[language]} alt={language} onClick={onClick} />
        </ListItem>
    );
}