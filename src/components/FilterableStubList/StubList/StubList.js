import React from "react";
import "./StubList.css";

const StubList = (props) => {
  const filterText = props.filterText;
  console.log(`filter text is: ${filterText}`);
  const stubs = [];
  props.stubs.forEach((stub) => {
    if (
      stub.predicates[0].equals.method.includes(filterText) ||
      stub.predicates[0].equals.path.includes(filterText)
    ) {
      stubs.push(
        <li key={stub.id}>
          <span>{stub.predicates[0].equals.method}</span>
          <span>{stub.predicates[0].equals.path}</span>
        </li>
      );
    }
  });
  return (
    <section className="stub-list">
      <ul>{stubs}</ul>
    </section>
  );
};

export default StubList;
