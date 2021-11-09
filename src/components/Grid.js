import Components from "./index";
import { sbEditable } from "@storyblok/storyblok-editable";
import React from "react";

export default (props) => (
  <div {...sbEditable(props.content)} className="grid">
    {props.content.columns.map((blok) => Components(blok))}
  </div>
);
