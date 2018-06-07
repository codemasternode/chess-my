import React from "react";
import Row from "./Row";

export default class Plansza extends React.Component {
  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
    this.renderAbc = this.renderAbc.bind(this);
  }

  renderRows(e) {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(<Row key={i} row={i} />);
    }
    console.log(rows);
    return rows;
  }

  renderAbc(e) {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return <Row data={abc} />;
  }

  render() {
    return (
      <div>
        <h1>Szachy</h1>
        {this.renderAbc()}
        {this.renderRows()}
      </div>
    );
  }
}
