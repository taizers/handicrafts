import styled from 'styled-components';

export const styledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    min-height: 40px;
    border: none;
    padding: 5px 10px;
  
    font-weight: 600;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.02em;
    color: #ffffff;
    background-color: var(--main-blue);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
    background-color: var(--light-blue) ;
  
    cursor: pointer;
    }
    
    &:active {
        outline: none;
        background-color: var(--dark-blue) ;
    }
    
    &:disabled {
        background-color: var(--main-blue);
        cursor: default;
    }
`
