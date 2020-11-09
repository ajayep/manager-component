import React, { Fragment } from "react";
import Table from "./table";
import Issue from "./issue";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          "flex-direction": "row"
        }}
      >
        <Table />
        <Issue />
      </div>
    </Fragment>
  );
}
