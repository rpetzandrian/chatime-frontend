import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages";
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

describe("email in register form", () => {
  test("it should be required", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
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
          <Register />
        </BrowserRouter>
      </Provider>
    );
    const emailInput = screen.getByTestId("email-Input");
    expect(emailInput).toHaveAttribute("type", "email");
  });
});

describe("password in login form", () => {
  test("it should be required", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("password-Input")).toBeRequired();
  });
  test("it should be have type password", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("password-Input")).toHaveAttribute(
      "type",
      "password"
    );
  });
});

describe("password in register form", () => {
  test("it should be required", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("password-Input")).toBeRequired();
  });
  test("it should be have type password", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("password-Input")).toHaveAttribute(
      "type",
      "password"
    );
  });
  test("it should be have hidden passwors icon", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("hidden-password")).toBeInTheDocument();
  });
});
