import React, { useEffect } from "react";
import { right_door, left_door } from "../../images";
import { LeftDoor, RightDoor } from "./style";

const Loading = () => {
  return (
    <div>
      <LeftDoor src={left_door}></LeftDoor>
      <RightDoor src={right_door}></RightDoor>
    </div>
  );
};

export default Loading;
