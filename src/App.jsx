import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Components from "./components";

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

const App = () => {
	const { loading, error, data } = useQuery(query);

	useEffect(() => {
		const { StoryblokBridge, location } = window;
		const storyblokInstance = new StoryblokBridge();

		storyblokInstance.on(["published"], () => {
			location.reload(true);
		});
	}, []);

	return (
		<>
			{loading ? (
				<p className="loading">loading...</p>
			) : error ? (
				<p className="loading">{error?.message}</p>
			) : (
				<div className="app">{Components(data?.PageItem?.content)}</div>
			)}
		</>
	);
};

export default App;
