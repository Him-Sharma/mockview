import React from "react";
import "./StubList.css";

const StubList = (props) => {
  return (
    <section className="stub-list">
      <ul>
        {props.stubs.map((stub) => (
          <li key={stub.id} onClick={props.selected.bind(this, stub.id)}>
            <span>{stub.method}</span>
            <span>{stub.endpointName}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StubList;
