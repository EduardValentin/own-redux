import React, { memo, useRef } from 'react';
export default () => {

  const nrOfRenders = useRef(0);
  nrOfRenders.current = nrOfRenders.current + 1;

  return (
    <div>
      Number of renders of component that is connected to store: {nrOfRenders.current}
    </div>
  );
};
