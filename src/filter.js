import React, { Fragment } from "react";
import { DatePicker } from "@atlaskit/datetime-picker";
import AvatarGroup from "@atlaskit/avatar-group";
import styled from "styled-components";

export default function Filter() {
  let currentdate = new Date();

  const onValueChange = (value) => {
    console.log("Value changed", value);
  };

  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  `;

  var RANDOM_USERS = [
    {
      email: "Ajay@actiotech.com",
      name: "Ajay Emmanuel",
      src:
        "https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
    },
    {
      email: "Aja1y@actiotech.com",
      name: "Ajay Emmanuel",
      src:
        "https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
    }
  ];
  const data = RANDOM_USERS.map((d) => ({
    email: d.email,
    src: d.src,
    key: d.email,
    name: d.name,
    href: "#"
  }));
  return (
    <Fragment>
      <Wrapper>
        <p>DateRange</p>
        <div className="datecomponents">
          <DatePicker
            id="datepicker-1"
            onChange={onValueChange}
            placeholder={currentdate.toLocaleDateString("en-GB")}
            spacing="compact"
          />
        </div>
        <div className="datecomponents">
          <DatePicker
            id="datepicker-1"
            onChange={onValueChange}
            placeholder={currentdate.toLocaleDateString("en-GB")}
            spacing="compact"
          />
        </div>
        <AvatarGroup
          appearance="stack"
          data={data}
          onAvatarClick={() => {
            console.log("Click");
          }}
        />
      </Wrapper>
    </Fragment>
  );
}
