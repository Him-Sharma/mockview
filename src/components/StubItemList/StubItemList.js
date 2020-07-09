/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./StubItemList.css";
import StubItem from "./StubItem/StubItem";

const stubItemList = (props) => {
  let stubItems;
  if (props.stubItems.length > 0) {
    stubItems = props.stubItems.map((stubItem) => {
      console.log(stubItem);
      return (
        <StubItem
          endpointName={stubItem.predicates[0].equals.path}
          key={stubItem.id}
        />
      );
    });
  } else {
    return <h1>No Stub items to display</h1>;
  }

  return <div className="StubItemList">{stubItems}</div>;
};

export default stubItemList;
