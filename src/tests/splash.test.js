import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Splash } from "../pages";
import storeConfig from "../redux/store";

const { store } = storeConfig();

describe("Element in splash screen", () => {
  test("img should have alt", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Splash />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("logo")).toHaveAttribute("alt");
  });
});
