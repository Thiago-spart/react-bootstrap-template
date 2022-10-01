import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./CustomCard.stories";

const { Default } = composeStories(stories);

describe("CustomCard component", () => {
	it("should match snapshot", () => {
		const { container } = render(<Default />);

		expect(container).toMatchSnapshot();
	});

	it("should be clicked", () => {
		render(<Default />);

		expect(screen.getByText("Titulo")).toBeTruthy();
	});
});
