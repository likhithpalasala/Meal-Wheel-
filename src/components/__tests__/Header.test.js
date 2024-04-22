import {render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {

    render (
    <BrowserRouter>
      <Provider store = {appStore}> 
         <Header />
      </Provider> 
    </BrowserRouter>
    );
 const loginButton = screen.getByRole("button");


 expect(loginButton).toBeInTheDocument();

});


it("Should render Header Component with cart items", () => {

    render (
    <BrowserRouter>
      <Provider store = {appStore}> 
         <Header />
      </Provider> 
    </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0 Items)");


    expect(cartItems).toBeInTheDocument();

});