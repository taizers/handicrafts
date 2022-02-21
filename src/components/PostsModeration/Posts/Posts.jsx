import styled from 'styled-components';
import moment from "moment";
import 'moment/locale/ru';

import Button from '@atlaskit/button';
import SelectClearIcon from '@atlaskit/icon/glyph/select-clear'

const Container = styled.div`
    padding: 20px;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    max-width: 500px;
    word-break: break-word;
    overflow: hidden;
    min-height: 100%;
    width: 100%;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5px;
`

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`
const Date = styled.p`
    font-size: 14px;
    padding: 5px;
    color: gray;
`

const Image = styled.img`
    width: 200px;
    height: 100px;
`

export const Posts = ({post, deletePost}) => {
    const { img, title, created_at, id} = post;

    const onDeletePost = () => {
        deletePost(id);
    }
    console.log(post);
    return (
        <Container>
            <Image src={img} width='150' height='150' alt={title} />
            <TextContainer>
                <Title>{title}</Title>
                <Date>{moment(created_at, "YYYYMMDD").locale('ru').fromNow()}</Date>
            </TextContainer>
            <ButtonsContainer>
                <Button
                    style={{
                        alignSelf: 'flex-end',
                        justifySelf: 'flex-end',
                    }}
                    iconAfter={<SelectClearIcon size="medium" />}
                    onClick={onDeletePost}
                ></Button>
            </ButtonsContainer>

        </Container>
    );
}