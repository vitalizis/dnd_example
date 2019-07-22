import React from "react";
import styled from "styled-components";
import { DropTarget } from "react-dnd";

const Container = styled.div`
  flex: 1.5 0;
  box-shadow: 0 0 ${p => (p.canDrop ? "1.75" : "0.75")}rem 0.1rem
    rgba(100, 0, 0, 0.5);
  background-color: ${p => (p.isOver ? "rgba(100, 0, 0, 0.1)" : "")};
  margin: 1rem;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: inset 0 0 2rem rgba(100, 0, 0, 0.3);
  animation: 1s linear 0s fade-out;
  @keyframes fade-out {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  flex: 1;
`;

@DropTarget(
  "TEST_ITEM",
  {
    drop: (props, monitor) => {
      const { id } = monitor.getItem();
      if (props.list.some(item => item.id === id)) {
        alert("already added");
        return;
      }
      props.setItemToSidebar(id);
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
  })
)
class Sidebar extends React.Component {
  render() {
    const { list, canDrop, isOver, connectDropTarget } = this.props;
    return (
      <Container canDrop={canDrop} isOver={isOver}>
        {connectDropTarget(
          <div style={{ flex: 1, padding: "1rem", height: "50vh" }}>
            <Header>
              <h2>New fields</h2>
            </Header>
            <List>
              {list.map(({ id, title }) => (
                <ItemContainer key={id}>{title}</ItemContainer>
              ))}
            </List>
          </div>
        )}
      </Container>
    );
  }
}

export default Sidebar;
