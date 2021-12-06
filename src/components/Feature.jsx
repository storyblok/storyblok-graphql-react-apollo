import { sbEditable } from "@storyblok/storyblok-editable";

const Feature = ({ content }) => {
	return (
		<div {...sbEditable(content)} className="column feature">
			{content?.name}
		</div>
	);
};

export default Feature;
