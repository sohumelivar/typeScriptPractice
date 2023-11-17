// ./node_modules/.bin/webpack
import { render } from "react-dom";
import App from "./App";
import { Counter } from "./components/Counter";
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)