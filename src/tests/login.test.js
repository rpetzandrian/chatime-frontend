import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages";
import storeConfig from "../redux/store";

const { store, persistor } = storeConfig();

describe("email in login form", () => {
  test("it should be required", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const emailInput = screen.getByTestId("email-Input");
    expect(emailInput).toBeRequired();
  });
  test("it should be have type email", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const emailInput = screen.getByTestId("email-Input");
    expect(emailInput).toHaveAttribute("type", "email");
  });
});
