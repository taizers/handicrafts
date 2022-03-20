import styled from 'styled-components';
import Input from '../Input/Input';
import { styledButton } from '../../styles/button';
import { useHistory } from "react-router-dom";
import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import { toast } from 'react-hot-toast';

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
              } else {
                toast.error(<FormattedMessage id={'label_password_not_equal'}/>);
              }

            }}
        >
          {({ formProps, submitting }) => (
              <form {...formProps}>
                <FormHeader
                    title={<FormattedMessage id={'label_sign_up'}/>}
                    description={<FormattedMessage id='required_field' />}
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
                          </>
                      );
                    }}
                  </Field>
                </FormSection>

                <FormFooter>
                  <ButtonGroup>
                    <Button appearance="subtle" onClick={onBackClick}>{<FormattedMessage id={'label_cansel'}/>}</Button>
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
