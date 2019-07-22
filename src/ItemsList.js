import React from "react";
import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  height: 50vh;
  box-shadow: 0 0 0.75rem 0.1rem rgba(0, 0, 100, 0.5);
  margin: 1rem;
  padding: 1rem;
`;

class ItemsList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <Container>
        <h2>Address information</h2>
        {list.map(({ id, title }) => <Item key={id} id={id} title={title} />)}
      </Container>
    );
  }
}

export default ItemsList;
