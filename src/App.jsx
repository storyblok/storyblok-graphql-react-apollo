import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

const App = () => {
  const { data } = useQuery(query);

  let story = useStoryblokState(data?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
};

const query = gql`
  {
    PageItem(id: "home") {
      id
      slug
      content {
        _uid
        component
        body
      }
    }
  }
`;

export default App;
