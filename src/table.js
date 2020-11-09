import React, { Fragment } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 500px;
`;

export default function Table() {
  const days = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const head = {
    cells: days.map((day) => ({
      key: day,
      content: day
    }))
  };

  const rows = [
    {
      key: `morning-row`,
      cells: ["9:00", "Math", "History", "Science", "Computing", "Math"].map(
        (content, index) => ({
          key: index,
          content
        })
      )
    },
    {
      key: "midday-row",
      cells: [
        {
          key: 0,
          content: "12:00"
        },
        {
          key: 1,
          content: "LUNCH",
          colSpan: 5
        }
      ]
    },
    {
      key: "afternoon-row",
      cells: [
        "13:00",
        "Science",
        "History",
        "Psychology",
        "Computing",
        "Business"
      ].map((content, index) => ({
        key: index,
        content
      }))
    }
  ];

  return (
    <Fragment>
      <Wrapper>
        <DynamicTable
          caption="Class timetable"
          head={head}
          rows={rows}
          rowsPerPage={10}
          defaultPage={1}
          loadingSpinnerSize="large"
          isLoading={false}
          isFixedSize
        />
      </Wrapper>
    </Fragment>
  );
}
