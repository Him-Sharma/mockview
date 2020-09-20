import React, { useState } from "react";
import axios from "axios";
import Aux from "../../hoc/Aux";
import Control from "../../components/Control/Control";
import StubList from "../../components/StubList/StubList";

const MockView = () => {
  const [stubs, setStubs] = useState([]);
  const [mockServerURL, setMockServerURL] = useState("");

  const urlSubmitHandler = (mockServerURL) => {
    setMockServerURL(mockServerURL);
    _fetchStubs();
  };
  const _fetchStubs = () => {
    axios.get(mockServerURL).then((response) => {
      console.log(response);
      const rawStubItems = response.data;
      const updateStubs = rawStubItems.map((stubItem) => {
        return {
          ...stubItem,
          id: stubItem._links.self.href.split("/").pop(),
        };
      });
      setStubs(updateStubs);
    });
  };
  return (
    <Aux>
      <Control onFormSubmit={urlSubmitHandler} />
      <StubList stubs={stubs} />
    </Aux>
  );
};
export default MockView;
