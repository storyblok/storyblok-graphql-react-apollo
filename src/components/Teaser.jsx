import { sbEditable } from "@storyblok/storyblok-editable";

const Teaser = ({ content }) => {
	return (
		<div {...sbEditable(content)} className="teaser">
			{content?.headline}
		</div>
	);
};

export default Teaser;
