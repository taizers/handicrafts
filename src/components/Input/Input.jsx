import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const LocaleLabel = styled.label`
    display: block;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 600;
    line-height: 1.57;
    letter-spacing: 0.02em;
    color: var(--disabled-blue);
`

const LocaleContainer = styled.div`
    margin: 0 auto;
    margin-top: 10px;
    max-width: 70%;
`

const LocaleInput = styled.input`
    display: block;
    box-sizing: border-box;

    width: 100%;
    min-height: 48px;
    padding-left: 15px;
    border: 2px solid #e1e3ec;
    border-radius: 4px;
    background-color: var(--white);

    color: var(--titles-color);
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;

    appearance: none;
    transition: var(--animation);
    -moz-appearance:textfield;

    &:focus::placeholder {
      opacity: 0;
    }

    &:hover {
      border-color: var(--light-blue);
      cursor: pointer;
    }

    &:active {
      outline: none;
      border-color: var(--dark-blue);
      cursor: text;
    }

    &:focus {
      outline: none;
      border-color: var(--dark-blue);
    }

    &:disabled {
      background-color: var(--disabled-bg);
      color: var(--disabed-blue);
    }

    &:disabled:hover {
      border-color: var(--disabled-bg);
    }

    &:disabled:active {
      cursor: default;
    }
`

const Input = ({ value, name, onChangeValue = null, type = "text", labelValue = false }) => {
    return (
        <LocaleContainer>
            {labelValue ? <LocaleLabel htmlFor={value + name}>{labelValue}</LocaleLabel> : null}
            <LocaleInput type={type} id={value + name} name={name} defaultValue={value} onChange={onChangeValue} />
        </LocaleContainer>
    );
};

Input.propTypes = {
    parentClassName: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    type: PropTypes.string,
    labelValue: PropTypes.string,
};

export default Input;
