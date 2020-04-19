import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
      {
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        text: "Climb Mount Everest",
        isCompleted: false,
      },
    ];
    // result we expect the selector to return when todo array in the state is defined
    const expected = [
      {
        text: "Say Hello",
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
