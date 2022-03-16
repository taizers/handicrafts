import styled from "styled-components";
import Spinner from '@atlaskit/spinner';

const LoaderWrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999999999999999999999999;
`

export const Loader = ({ visible }) => {
    console.log(visible);
    if (visible) {
      return (
        <LoaderWrapper>
          <Spinner size="large" />
        </LoaderWrapper>
      );
    }

    return null;
}
