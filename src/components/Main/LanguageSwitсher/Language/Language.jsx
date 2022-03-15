import styled from 'styled-components';
import { flags } from '../../../../locales/locales';

const ListItem = styled.li`
    margin: 5px;
    min-width: 40px;
  border: solid black 1px;
`
const Image = styled.img`
    width: 40px;
    height: 25px;
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