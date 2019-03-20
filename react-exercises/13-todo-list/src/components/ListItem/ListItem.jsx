import React from "react";

/**
 * Hint: you will have to pass down a callback to change state
 * and have some way of identifying the text in the ListItem component.
 */
function ListItem(props) {
  //props.reset()
  return (
    <li className="list-group-item">
      {props.children}
      <button
        type="button"
        className="btn btn-link float-right"
        aria-label="Delete"
        onClick={props.reset}
      >
        x
      </button>
    </li>
  );
}

export default ListItem;
