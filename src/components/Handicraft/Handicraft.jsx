import styled from 'styled-components';
import{ useParams } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

export const Handicraft = () => {
    let { id } = useParams(); 
  return (
    <Container>
        {id}
    </Container>
  );
}