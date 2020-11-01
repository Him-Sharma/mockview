import React, { useEffect, useState } from "react";
import axios from "axios";
import Aux from "../../hoc/Aux";
import Control from "../../components/Control/Control";
import FilterableStubList from "../../components/FilterableStubList/FilterableStubList";

const MockView = () => {
  const [stubs, setStubs] = useState([]);
  const [mockServerURL, setMockServerURL] = useState("");

  useEffect(() => {
    if (mockServerURL) {
      axios.get(mockServerURL).then((response) => {
        console.log(response);
        const rawStubItems = response.data.stubs;
        const updatedStubs = rawStubItems.map((stubItem) => {
          return {
            ...stubItem,
            id: stubItem._links.self.href.split("/").pop(),
          };
        });
        console.log(updatedStubs);
        setStubs(updatedStubs);
      });
    }
  }, [mockServerURL]);
  const urlSubmitHandler = (mockServerURL) => {
    setMockServerURL(mockServerURL);
  };

  return (
    <Aux>
      <Control onFormSubmit={urlSubmitHandler} />
      <FilterableStubList stubs={stubs} />
    </Aux>
  );
};
export default MockView;
