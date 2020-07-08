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
  let stubItems = null;
  if (stubItemState.stubItems.length > 0) {
    stubItems = stubItemState.stubItems.map((stubItem) => {
      return <StubItem endpointName={stubItem.endpointName} />;
    });
  }

  return <div className="StubItemList">{stubItems}</div>;
};

export default stubItemList;
