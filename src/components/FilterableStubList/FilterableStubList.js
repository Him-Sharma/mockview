import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import StubList from "./StubList/StubList";
import Search from "./Search/Search";

const FilterableStubList = (props) => {
  const [filterText, setFilterText] = useState("");

  return (
    <Aux>
      <Search filterText={filterText} onFilterTextChange={setFilterText} />
      <StubList stubs={props.stubs} filterText={filterText} />
    </Aux>
  );
};
export default FilterableStubList;
