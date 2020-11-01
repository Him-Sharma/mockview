import React from "react";
import "./StubList.css";

const StubList = (props) => {
  const filterText = props.filterText;
  console.log(`filter text is: ${filterText}`);
  return (
    <section className="stub-list">
      <ul>
        {props.stubs
          .filter((stub) => stub.predicates[0].equals.path === filterText)
          .map((stub) => (
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
