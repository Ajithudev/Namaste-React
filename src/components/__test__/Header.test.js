import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter, Link } from "react-router"; // Link element
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from 'util';

it("Should render Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});
