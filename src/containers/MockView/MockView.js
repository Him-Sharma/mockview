import React, { Component } from "react";
import axios from "axios";
import "./MockView.css";
import StubItem from "../../components/StubListItem/StubListItem";
import StubItemInfo from "../../components/StubItemInfo/StubItemInfo";

class MockView extends Component {
  state = {
    stubItems: [],
    selectedStubItem: null,
  };

  fetchStubHandler = () => {
    const url = document.getElementById("serverUrlInput").value;
    axios.get(url).then((response) => {
      const stubItems = response.data.stubs;
      const updateStubItems = stubItems.map((stubItem) => {
        return {
          ...stubItem,
          id: stubItem._links.self.href.split("/").pop(),
        };
      });
      this.setState({ stubItems: updateStubItems });
    });
  };
  stubItemSelectedHandler = (stubItem) => {
    this.setState({ selectedStubItem: stubItem });
  };
  render() {
    let stubItems = <h1>No stubitems to display!</h1>;
    if (this.state.stubItems.length > 0) {
      stubItems = this.state.stubItems.map((stubItem) => {
        return (
          <StubItem
            endpointName={stubItem.predicates[0].equals.path}
            method={stubItem.predicates[0].equals.method}
            key={stubItem.id}
            clicked={() => this.stubItemSelectedHandler(stubItem)}
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
          <button onClick={this.fetchStubHandler} data-testid="fetchStubButton">
            Fetch Stubs
          </button>
        </section>
        <section className="StubContainer">
          <div className="StubItemList">{stubItems}</div>
          <StubItemInfo selectedStubItem={this.state.selectedStubItem} />
        </section>
      </div>
    );
  }
}
export default MockView;
