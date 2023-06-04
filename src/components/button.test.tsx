import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./button";
describe("<Button />", () => {
  const clickFunction = jest.fn();
  it("should render the button as expected", () => {
    render(
      <Button
        onClick={() => clickFunction}
        icon={<h1>This could be an icon</h1>}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    fireEvent(button, new MouseEvent("click"));
    waitFor(() => expect(clickFunction).toBeCalled());
  });
});
