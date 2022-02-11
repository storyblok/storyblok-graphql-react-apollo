import { sbEditable } from "@storyblok/storyblok-editable";
import Components from "./index";

const Grid = ({ content }) => (
	<div {...sbEditable(content)} className="grid">
		{content?.columns.map((blok) => Components(blok))}
	</div>
);

export default Grid;
