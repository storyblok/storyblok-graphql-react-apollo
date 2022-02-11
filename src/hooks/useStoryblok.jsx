import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
	accessToken: process.env.REACT_APP_PREVIEW_TOKEN,
	cache: {
		clear: "auto",
		type: "memory",
	},
});

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

export function useStoryblok(preview) {
	const { loading, error, data } = useQuery(query);
	const [story, setStory] = useState();

	useEffect(() => {
		setStory(data?.PageItem);
	}, [data]);

	function initEventListeners() {
		const { StoryblokBridge } = window;
		if (typeof StoryblokBridge !== "undefined") {
			const storyblokInstance = new StoryblokBridge({
				resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
			});

			storyblokInstance.on(["change", "published"], () =>
				window.location.reload(true)
			);

			storyblokInstance.on("input", (event) => {
				setStory(event.story);
			});

			storyblokInstance.on("enterEditmode", (event) => {
				Storyblok.get(`cdn/stories/${event.storyId}`, {
					version: "draft",
					resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
				})
					.then(({ data }) => {
						if (data.story) {
							setStory(data.story);
						}
					})
					.catch((error) => {
						console.log(error);
					});
			});
		}
	}

	function addBridge(callback) {
		const existingScript = document.getElementById("storyblokBridge");
		if (!existingScript) {
			const script = document.createElement("script");
			script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
			script.id = "storyblokBridge";
			document.body.appendChild(script);
			script.onload = () => {
				callback();
			};
		} else {
			callback();
		}
	}

	useEffect(() => {
		if (preview) {
			addBridge(initEventListeners);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [preview]);

	return {
		loading,
		error,
		story,
	};
}

export default Storyblok;
