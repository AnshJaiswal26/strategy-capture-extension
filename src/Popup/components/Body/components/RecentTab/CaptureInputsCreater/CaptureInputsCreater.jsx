import Title from "./Title";
import InputsCreater from "./InputsCreater";
import { useState } from "react";
import { TopDownSlider } from "@components";

export default function CaptureInputsCreater() {
  return (
    <TopDownSlider title={"Create Capture Inputs"}>
      <div className={"input-creater-row-wrapper"}>
        <InputsCreater />
      </div>
    </TopDownSlider>
  );
}
