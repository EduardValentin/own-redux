import React, { useMemo, useContext } from 'react';
import StoreContext from './context';

export default (
  mapStateToProps,
  mapDispatchToProps,
  options = {},
) => (Comp) => {

  const {
    pure = true,
    forwardRef = false,
  } = options;

  // Make the decorated component pure by default to prevent it from rerendering when store changes without its direct props being changed
  const PureComp = React.memo(props => <Comp {...props} />);

  const ConnectedComponent = props => {
    const { state, dispatch } = useContext(StoreContext);

    // Prevent subsequent calls to mapStateToProps if the dependencies didn't change
    const stateProps = useMemo(
      () => mapStateToProps ? mapStateToProps(state, props) : {},
      [state, props]
    );

    // Prevent subsequent calls to mapDispatchToProps if the dependencies didn't change
    const dispatchProps = useMemo(
      () => mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {},
      [dispatch, props]
    );

    return <PureComp {...stateProps} {...dispatchProps} {...props} ref={props.forwardedRef} />
  }

  const FinalComp = pure ? React.memo(ConnectedComponent) : ConnectedComponent;

  if (forwardRef) {
    return React.forwardRef((props, ref) => <FinalComp {...props} forwardedRef={ref} />);
  }

  return FinalComp;
};

