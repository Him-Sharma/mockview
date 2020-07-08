/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./StubItemList.css";
import StubItem from "./StubItem";

const stubItemList = (props) => {
  const [stubItemState] = useState({
    stubItems: [
      { endpointName: "/posts" },
      { endpointName: "/comments" },
      { endpointName: "/albums" },
      { endpointName: "/photos" },
    ],
  });

  return (
    <div className="StubItemList">
      <StubItem endpointName={stubItemState.stubItems[0].endpointName} />
      <StubItem endpointName={stubItemState.stubItems[1].endpointName} />
      <StubItem endpointName={stubItemState.stubItems[2].endpointName} />
      <StubItem endpointName={stubItemState.stubItems[3].endpointName} />
    </div>
  );
};

export default stubItemList;
