import React, { memo, useRef } from 'react';
export default memo(() => {

  const nrOfRenders = useRef(0);
  nrOfRenders.current = nrOfRenders.current + 1;

  return (
    <div>
      Number of renders of component that is not connected to store: {nrOfRenders.current}
    </div>
  );
});
