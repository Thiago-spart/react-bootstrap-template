/* eslint-disable import/no-default-export */
/* eslint-disable import/exports-last */
import type { ComponentStory, Meta } from "@storybook/react";

import { CustomCard } from "./CustomCard.index";

const meta: Meta<typeof CustomCard> = {
	title: "Componentes/Button",
	component: CustomCard,
};

const Template: ComponentStory<typeof CustomCard> = props => <CustomCard {...props} />;

export const Default = Template.bind({});
Default.args = {
	title: "Titulo",
	bodyContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	link: "https://www.google.com"
};

export default meta;
