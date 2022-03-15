import styled from 'styled-components';
import Input from '../Input/Input';
import { styledButton } from '../../styles/button';
import { useHistory } from "react-router-dom";
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';

import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';
import {FormattedMessage} from "react-intl";
import React from "react";

const Container = styled.div`
    display: flex;
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

`
const ContainerInner = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 30px;
`

export const SignUp = ({ signUp }) => {
  let history = useHistory();

  const onBackClick = () => {
    history.goBack();
  }

  return (
    <Container>
      <ContainerInner>
        <Form
            onSubmit={(data) => {
              console.log('form data', data);
              if (data.password === data.password_confirmation) {
                signUp({data, history});
              }

            }}
        >
          {({ formProps, submitting }) => (
              <form {...formProps}>
                <FormHeader
                    title={<FormattedMessage id={'label_sign_up'}/>}
                    description="* indicates a required field"
                />
                <FormSection>
                  <Field
                      aria-required={true}
                      name="email"
                      label={<FormattedMessage id={'label_email'}/>}
                      isRequired
                      defaultValue=""
                  >
                    {({ fieldProps, error }) => (
                        <>
                          <TextField autoComplete="off" {...fieldProps} />
                          {!error && (
                              <HelperMessage>
                                You can use letters, numbers and periods.
                              </HelperMessage>
                          )}
                          {error && (
                              <ErrorMessage>
                                This username is already in use, try another one.
                              </ErrorMessage>
                          )}
                        </>
                    )}
                  </Field>
                  <Field
                      aria-required={true}
                      name="name"
                      label={<FormattedMessage id={'label_name'}/>}
                      isRequired
                      defaultValue=""
                  >
                    {({ fieldProps, error }) => (
                        <>
                          <TextField autoComplete="off" {...fieldProps} />
                          {error && (
                              <ErrorMessage>
                                This username is already in use, try another one.
                              </ErrorMessage>
                          )}
                        </>
                    )}
                  </Field>
                  <Field
                      aria-required={true}
                      name="password"
                      label={<FormattedMessage id={'label_password'}/>}
                      defaultValue=""
                      isRequired
                      validate={(value) =>
                          value?.length < 8 ? 'TOO_SHORT' : undefined
                      }
                  >
                    {({ fieldProps, error, valid, meta }) => {
                      return (
                          <>
                            <TextField type="password" {...fieldProps} />
                            {error && !valid && (
                                <HelperMessage>
                                  Use 8 or more characters with a mix of letters, numbers
                                  and symbols.
                                </HelperMessage>
                            )}
                            {error && (
                                <ErrorMessage>
                                  Password needs to be more than 8 characters.
                                </ErrorMessage>
                            )}
                            {valid && meta.dirty ? (
                                <ValidMessage>Awesome password!</ValidMessage>
                            ) : null}
                          </>
                      );
                    }}
                  </Field>
                  <Field
                      aria-required={true}
                      name="password_confirmation"
                      label={<FormattedMessage id={'label_password_repeat'}/>}
                      defaultValue=""
                      isRequired
                      validate={(value) =>
                          value?.length < 8 ? 'TOO_SHORT' : undefined
                      }
                  >
                    {({ fieldProps, error, valid, meta }) => {
                      return (
                          <>
                            <TextField type="password" {...fieldProps} />
                            {error && !valid && (
                                <HelperMessage>
                                  Use 8 or more characters with a mix of letters, numbers
                                  and symbols.
                                </HelperMessage>
                            )}
                            {error && (
                                <ErrorMessage>
                                  Password needs to be more than 8 characters.
                                </ErrorMessage>
                            )}
                            {valid && meta.dirty ? (
                                <ValidMessage>Awesome password!</ValidMessage>
                            ) : null}
                          </>
                      );
                    }}
                  </Field>
                </FormSection>

                <FormFooter>
                  <ButtonGroup>
                    <Button appearance="subtle" onClick={onBackClick}>Cancel</Button>
                    <LoadingButton
                        type="submit"
                        appearance="primary"
                        isLoading={submitting}
                    >
                        {<FormattedMessage id={'button_sign_up'}/>}
                    </LoadingButton>
                  </ButtonGroup>
                </FormFooter>
              </form>
          )}
        </Form>
      </ContainerInner>
    </Container>
  );
}
