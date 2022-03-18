import styled from 'styled-components';

const UsefullLinkItem = styled.li`
    margin: 10px 0;
`

const Link = styled.a`
  color: blue;

  &:hover {
    color: red;
    text-decoration: underline;
  }
`

export const UsefullLink = ({link}) => {
  return (
    <UsefullLinkItem>
        <Link target='_blank' href={link}>
            - {link}
        </Link>
    </UsefullLinkItem>
  );
}
