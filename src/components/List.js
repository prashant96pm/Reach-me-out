import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "LinkedIn",
        link: "http://linkedin.com",
        icon: "https://image.flaticon.com/icons/png/128/1409/1409945.png",
        bgColor: "#ff9580"
      },
      {
        id: 2,
        name: "GitHub",
        link: "https://github.com",
        icon: "https://image.flaticon.com/icons/png/128/919/919847.png",
        bgColor: "#f2faa6"
      },
      {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/",
        icon: "https://image.flaticon.com/icons/png/128/1409/1409937.png",
        bgColor: "#b8b3e8"
      }
    ];

    // Use map() to iterate over data and render ListItem components
    const listItems = data.map((item) => (
      <div
        className="listItem"
        style={{ backgroundColor: item.bgColor }}
        key={item.id}
      >
        <img src={item.icon} alt={item.name} />
        <a href={item.link}>{item.name}</a>
      </div>
    ));

    return <div className="List">{listItems}</div>;
  }
}

export default List;
