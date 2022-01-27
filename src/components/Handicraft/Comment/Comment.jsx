import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Text = styled.p`

`

const CommentsItem = styled.li`


`

export const Comment = ({comment}) => {
  return (
    <CommentsItem>

        <Text>{comment.userId}</Text>
        <Text>{comment.comment}</Text>
        
    </CommentsItem>
  );
}