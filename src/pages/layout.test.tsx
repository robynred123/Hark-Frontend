import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Layout } from "./layout";

describe("<Layout />", () => {
  it("should render the Layout wrapper as expected", () => {
    render(
      <Layout>
        <h1>Content!</h1>
      </Layout>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Content!");
  });
});
