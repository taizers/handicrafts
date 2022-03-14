import styled, { css } from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${props =>
    props.disappear &&
    css`
      display: block; /* show */
    `}
`;

export const Loader = ({ isLoading }) => {
    console.log(isLoading);
    return (
        <DarkBackground disappear={!isLoading}>
            <LoadingOverlay
                active={true}
                // spinner={<BounceLoader />}
                spinner={true}
                text="Loading your content..."
            >
            </LoadingOverlay>
        </DarkBackground>
    );
}