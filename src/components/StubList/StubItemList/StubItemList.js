/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./StubItemList.css";
import StubItem from "./StubItem/StubItem";

const stubItemList = (props) => {
  const [stubItemState] = useState({
    stubItems: [
      { id: "1", endpointName: "/posts" },
      { id: "2", endpointName: "/comments" },
      { id: "3", endpointName: "/albums" },
      { id: "4", endpointName: "/photos" },
    ],
  });
  let stubItems = null;
  if (stubItemState.stubItems.length > 0) {
    stubItems = stubItemState.stubItems.map((stubItem) => {
      return (
        <StubItem endpointName={stubItem.endpointName} key={stubItem.id} />
      );
    });
  }

  return <div className="StubItemList">{stubItems}</div>;
};

export default stubItemList;
