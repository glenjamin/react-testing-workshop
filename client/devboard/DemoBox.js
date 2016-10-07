import React from "react";

const styles = {
  background: {
    background: "#f5f5f5",
    padding: 25,
    margin: "-10px -25px",
    overflow: "hidden",
  },
  todoapp: {
    background: "#ffffff",
    boxShadow: `
      0 2px 4px 0 rgba(0, 0, 0, 0.2),
      0 25px 50px 0 rgba(0, 0, 0, 0.1)
    `,
  }
};

export default class DemoBox extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.todoapp}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
