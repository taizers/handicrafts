import styled from 'styled-components';
import Button from '@atlaskit/button';
import { useHistory } from "react-router-dom";
import Form, {
    ErrorMessage,
    Field,
    FormFooter,
    FormHeader,
    FormSection,
    HelperMessage,
    ValidMessage
} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
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

export const Login = ({signIn}) => {
    let history = useHistory();

    const onBackClick = () => {
        history.goBack();
    }

    return (
        <Container>
            <ContainerInner>
                <Form
                    onSubmit={(data) => {
                        signIn(data);
                    }}
                >
                    {({ formProps, submitting }) => (
                        <form {...formProps}>
                            <FormHeader
                                title={<FormattedMessage id={'label_sign_in'}/>}
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
                            </FormSection>

                            <FormFooter>
                                <ButtonGroup>
                                    <Button appearance="subtle" onClick={onBackClick}>{<FormattedMessage id={'label_cansel'}/>}</Button>
                                    <LoadingButton
                                        type="submit"
                                        appearance="primary"
                                        isLoading={submitting}
                                    >
                                        {<FormattedMessage id={'button_sign_in'}/>}
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
