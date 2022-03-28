import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="grid">
    {blok?.columns.map((nestedBlock) => (
      <StoryblokComponent blok={nestedBlock} key={nestedBlock._uid} />
    ))}
  </div>
);

export default Grid;
