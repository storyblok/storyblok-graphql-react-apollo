import { sbEditable } from "@storyblok/storyblok-editable";
import React from "react";

export default (props) => (
  <div {...sbEditable(props.content)} className="column feature">
    {props.content.name}
  </div>
);
