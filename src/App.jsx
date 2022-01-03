import Components from "./components";
import { useStoryblok } from "./hooks/useStoryblok";

const App = () => {
	const preview = true;
	const data = useStoryblok(preview);

	return (
		<>
			{data?.loading ? (
				<p className="loading">loading...</p>
			) : data?.error ? (
				<p className="loading">{data?.error?.message}</p>
			) : (
				<div className="app">{Components(data?.story?.content)}</div>
			)}
		</>
	);
};

export default App;
