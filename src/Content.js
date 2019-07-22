import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import ItemsList from "./ItemsList";

const Container = styled.div`
  display: flex;
`;

const initialList = [
  { id: 1, title: "Test item 1", added: false },
  { id: 2, title: "Test item 2", added: false },
  { id: 3, title: "Test item 3", added: false },
  { id: 4, title: "Test item 4", added: false },
  { id: 5, title: "Test item 5", added: false },
  { id: 6, title: "Test item 6", added: false },
  { id: 7, title: "Test item 7", added: false }
];

class Content extends React.Component {
  state = {
    list: initialList,
    addedList: []
  };

  handleDropItem = id => {
    this.setState(state => ({
      addedList: state.addedList.concat([
        state.list.find(item => item.id === id)
      ])
    }));
  };

  render() {
    const { list, addedList } = this.state;
    return (
      <Container>
        <ItemsList list={list} />
        <Sidebar
          list={addedList}
          setItemToSidebar={this.handleDropItem}
        />
      </Container>
    );
  }
}

export default Content;
