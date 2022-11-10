import React from "react";

const UserCart = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
    </div>
  );
};

export default UserCart;
