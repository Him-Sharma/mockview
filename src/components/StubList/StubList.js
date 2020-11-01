import React from "react";
import "./StubList.css";

const StubList = (props) => {
  return (
    <section className="stub-list">
      <ul>
        {props.stubs.map((stub) => (
          <li key={stub.id}>
            <span>{stub.predicates[0].equals.method}</span>
            <span>{stub.predicates[0].equals.path}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StubList;
