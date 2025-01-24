import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // Import necessary utilities
import ItemForm from "../components/ItemForm"; // Import the component to be tested

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn(); // Mock callback function
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />); // Render the ItemForm with the callback prop

  // Simulate user input for Name and Category
  fireEvent.change(screen.queryByLabelText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.queryByLabelText(/Category/), {
    target: { value: "Dessert" },
  });

  // Simulate form submission
  fireEvent.submit(screen.queryByText(/Add to List/));

  // Log the calls made to the mock function
  console.log(onItemFormSubmit.mock.calls);

  // Check if the callback is called with the expected values
  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});
