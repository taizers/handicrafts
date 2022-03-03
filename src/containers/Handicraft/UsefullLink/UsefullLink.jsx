import styled from 'styled-components';
import{ useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { styledButton } from '../../../styles/button';

const Text = styled.p`

`

const UsefullLinkItem = styled.li`
    margin: 10px 0;
`

const Link = styled.a`
  &:hover {
    color: red;
    text-decoration: underline;
  }
`

export const UsefullLink = ({link}) => {
  return (
    <UsefullLinkItem>
        <Link target='_blank' href={link}>
            {link}
        </Link>
    </UsefullLinkItem>
  );
}
