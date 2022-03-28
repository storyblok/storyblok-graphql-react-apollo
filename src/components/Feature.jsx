import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="column feature">
      {blok?.name}
    </div>
  );
};

export default Feature;
