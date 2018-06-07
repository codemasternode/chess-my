import React from "react";
import Field from "./Field";

const Row = ({ row, key, data }) => {
  const renderFields = e => {
    let array = [];
    for (let i = 0; i < 8; i++) {
      array.push(<Field key={i} row={row} column={i} />);
    }
    console.log(array);
    return array;
  };
  if (data) {
    return (
      <div className="row top">
        {data.map((value, index) => {
          return (
            <div className="field" key={index}>
              {value}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="row" key={key}>
      <div className="pool">
        <h2>{row}</h2>
      </div>
      {renderFields()}
    </div>
  );
};
export default Row;
