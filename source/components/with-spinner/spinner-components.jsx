import React from 'react';
import { SpinnerContainer,SpinnerOverlay } from './with-spinner.styles';

const SpinnerTing = WrappedComponent => ({isLoading,...otherProps}) => {
    return isLoading?(
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):
    <WrappedComponent {...otherProps} />
}

export default SpinnerTing;