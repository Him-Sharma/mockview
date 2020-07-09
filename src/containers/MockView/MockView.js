import React, { Component } from "react";
import axios from "axios";
import "./MockView.css";
import StubItemList from "../../components/StubItemList/StubItemList";

class MockView extends Component {
  state = {
    stubItems: [],
    selectedStubItem: null,
  };

  fetchStubHandler = () => {
    const url = document.getElementById("serverUrlInput").value;
    axios.get(url).then((response) => {
      const stubItems = response.data.stubs;
      this.setState({ stubItems: stubItems });
    });
  };

  render() {
    return (
      <div className="MockView">
        <h1>Mockview</h1>
        <section className="Control">
          <input type="text" id="serverUrlInput"></input>
          <button onClick={this.fetchStubHandler}>Fetch Stubs</button>
        </section>
        <section className="StubContainer">
          <StubItemList stubItems={this.state.stubItems} />
        </section>
      </div>
    );
  }
}
export default MockView;
