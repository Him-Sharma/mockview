import React from "react";
import "./StubItemInfo.css";

const stubItemInfo = (props) => {
  let stubInformation = <h1>Select a stub to view information here.</h1>;
  if (props.selectedStubItem) {
    stubInformation = (
      <div>
        <h1>Method: {props.selectedStubItem.predicates[0].equals.method}</h1>
        <h1>Path: {props.selectedStubItem.predicates[0].equals.path}</h1>
        <h1>Responses: </h1>
        <p>StatusCode: {props.selectedStubItem.responses[0].is.statusCode}</p>
        <p>body: {props.selectedStubItem.responses[0].is.body}</p>
      </div>
    );
  }
  return (
    <div className="StubItemInfo" data-testid="messageText">
      {stubInformation}
    </div>
  );
};
export default stubItemInfo;
