import Button from '@atlaskit/button';
import React, { Fragment, useState } from 'react';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';

import TextArea from '@atlaskit/textarea';

export const CommentEditor = ({ comment, postId, createComment, editComment, signedIn, setCurrentEditComment }) => {  
    return (
      <Form
        onSubmit={(formState) => {
          if (comment?.id) {
            const data = {
              text: formState.text,
              edited: true,
            };
      
            editComment({comment: data, postId, commentId: comment.id});
          } else {
          const data = {
            text: formState.text,
            edited: false,
            moderated: false,
          };
          
          createComment({comment: data, postId});
        }
        console.log('ds');
        setCurrentEditComment('');
        }
        }
      >
        {({ formProps }) => (
          <form {...formProps}>
            <Field name="text">
              {({ fieldProps }) => (
                <Fragment>
                  <TextArea
                    defaultValue={comment?.text || ''}
                    style={
                      {
                        fontSize: '16px',
                        height: '100px',
                      }
                    }
                    {...fieldProps}
                  />
                </Fragment>
              )}
            </Field>
            <FormFooter>
            {comment?.id && <Button type="button" appearance="subtle" onClick={() => setCurrentEditComment('')}>
              Отменить
            </Button>}
            {signedIn && <Button type="submit" appearance="primary">
              Отправить
            </Button>}
            </FormFooter>
          </form>
        )}
      </Form>
    );
}
