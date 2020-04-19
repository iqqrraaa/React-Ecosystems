import { expect } from "chai";
import { todos } from "../reducers";

// to test if the reducer responds appropriately to the create todo action
describe("The todos reducer", () => {
  it("Adds a new todo when CREATE_TODO action is received", () => {
    // fake current state and fake action with a payload
    const fakeTodo = { text: "hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: {
        todo: fakeTodo,
      },
    };
    const originalState = { isLoading: false, data: [] };

    // results we expect our todos reducer to return when passedd the above arguments
    const expected = {
      isLoading: false,
      data: [fakeTodo],
    };
    // actual value the todo reducer returns
    const actual = todos(originalState, fakeAction);

    // using chai to compare actual and expected results
    expect(actual).to.deep.equal(expected);
  });
});
