import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, valueProperty, textPropery, selectedItem, onItemSelect } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textPropery]}
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
