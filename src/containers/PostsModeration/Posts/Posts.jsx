import styled from 'styled-components';
import moment from "moment";
import 'moment/locale/ru';
import SwiftSlider from 'react-swift-slider'

import Button from '@atlaskit/button';
import { map, isEmpty } from "lodash";
import React from "react";
import { API_IMAGE_URL } from "../../../constants";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-word;
    width: 100%;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: bold;
`

const SubTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`
const Date = styled.p`
    font-size: 14px;
    padding: 5px;
    color: gray;
    margin-bottom: 30px;
`

const Text = styled.p`
  text-align: left;
  text-indent: 20px;
  margin-bottom: 20px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const getText = (textList) => {
    const text = textList.split('\r\n')
    return <TextContainer>
        {text.map( (item, index) => <Text key={'text' + index}>{item}</Text> )}
    </TextContainer>
}

export const Posts = ({post, deletePost, language}) => {
    const { images, content, subtitle, title, created_at, id } = post;

    const onDeletePost = () => {
        deletePost(id);
    }

    const imagesList = map(images, (item, index)=> ({id: index, src: `${API_IMAGE_URL}${item.image}`}));

    return (
        <Container>
            {post && <TextContainer>
                <Title>{title}</Title>
                {subtitle && subtitle !== 'undefined' &&<SubTitle>{subtitle}</SubTitle>}
                <Date>{moment(created_at).locale(language).format('LL')}</Date>
                {getText(content)}
                {!isEmpty(imagesList) && <SwiftSlider data={imagesList} height={300}/>}
                <ButtonsContainer>
                    <Button
                        onClick={onDeletePost}
                        appearance="primary"
                    >
                        <FormattedMessage id="button_delete"/>
                    </Button>
                </ButtonsContainer>

            </TextContainer>}
        </Container>
    );
}