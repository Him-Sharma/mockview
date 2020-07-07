import React from "react";

const control = () => {
  return (
    <div className="control">
      <input type="text" data-testid="serverUrlInput"></input>
      <button>Fetch Mocks</button>
    </div>
  );
};

export default control;
