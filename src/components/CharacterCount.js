import React from "react";
import { charCountState } from "../App";
import { useRecoilValue } from "recoil";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <div>Character Count: {count}</div>;
}
