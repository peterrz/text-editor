import counterReducer, { ThemeState, change } from "./themeSlice";

describe("counter reducer", () => {
  const initialState: ThemeState = {
    value: "dark",
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: "light",
    });
  });

  it("should handle change the theme", () => {
    const actual = counterReducer(initialState, change());
    expect(actual.value).toEqual("dark");
  });
});
