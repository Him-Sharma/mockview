import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MockView.css";
import StubItem from "../../components/StubListItem/StubListItem";
import StubItemInfo from "../../components/StubItemInfo/StubItemInfo";

const MockView = () => {
  const [stubItems, setStubItems] = useState([]);
  const [selectedStubItem, setselectedStubItem] = useState(null);

  const fetchStubHandler = () => {
    const url = document.getElementById("serverUrlInput").value;
    axios.get(url).then((response) => {
      const rawStubItems = response.data.stubs;
      const updateStubItems = rawStubItems.map((stubItem) => {
        return {
          ...stubItem,
          id: stubItem._links.self.href.split("/").pop(),
        };
      });
      setStubItems(updateStubItems);
    });
  };
  const stubItemSelectedHandler = (stubItem) => {
    setselectedStubItem(stubItem);
  };

  let stubItemsElement = <h1>No stubitems to display!</h1>;
  if (stubItems.length > 0) {
    stubItemsElement = stubItems.map((stubItem) => {
      return (
        <StubItem
          endpointName={stubItem.predicates[0].equals.path}
          method={stubItem.predicates[0].equals.method}
          key={stubItem.id}
          clicked={() => stubItemSelectedHandler(stubItem)}
        />
      );
    });
  }

  return (
    <div className="MockView">
      <h1>Mockview</h1>
      <section className="Control">
        <input
          type="text"
          id="serverUrlInput"
          data-testid="serverUrlInput"
        ></input>
        <button onClick={fetchStubHandler} data-testid="fetchStubButton">
          Fetch Stubs
        </button>
      </section>
      <section className="StubContainer">
        <div className="StubItemList">{stubItemsElement}</div>
        <StubItemInfo selectedStubItem={selectedStubItem} />
      </section>
    </div>
  );
};
export default MockView;
