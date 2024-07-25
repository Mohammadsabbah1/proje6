import { handleSubmit } from "../src/client/js/formHandler";

describe("handleSubmit function", () => {
  test("should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });

  test("should prevent default form behavior", () => {
    // Create a mock event with preventDefault method
    const mockEvent = { preventDefault: jest.fn() };
    
    // Call handleSubmit with the mock event
    handleSubmit(mockEvent);
    
    // Check if preventDefault was called
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
