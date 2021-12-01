import React from "react";

const TypeBlock = ({ TypeIcon, type }) => {
  return (
    <div className={`${type.name} typeBlock`}>
      <TypeIcon size="1.5rem" color="#FFF" />
      <span key={type.name} className={type.name}>
        {type.name}
      </span>
    </div>
  );
};

export default TypeBlock;
