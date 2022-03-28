import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="teaser">
      {blok?.headline}
    </div>
  );
};

export default Teaser;
