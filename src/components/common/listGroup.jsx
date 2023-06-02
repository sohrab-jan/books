import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, valueProperty, nameProperty } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[nameProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textPropery: "name",
  valuePropery: "_id",
};

export default ListGroup;
