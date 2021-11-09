import Components from "./index";
import { sbEditable } from "@storyblok/storyblok-editable";
import React from "react";

export default (props) => (
  <div {...sbEditable(props.content)}>
    <div>{props.content.body.map((blok) => Components(blok))}</div>
    <div className="grid">
      {props.content.teasered_products.map((product, index) => (
        <div key={index} className="column feature">
          <img src={product.content.image} alt={product.content.name} />
          {product.content.name}
        </div>
      ))}
    </div>
  </div>
);
