import { sbEditable } from "@storyblok/storyblok-editable";
import Components from "./index";

const Page = ({ content }) => (
	<div {...sbEditable(content)}>
		{content?.body?.map((blok) => Components(blok))}
	</div>
);

export default Page;
