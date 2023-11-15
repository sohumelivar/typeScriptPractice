// ./node_modules/.bin/webpack
import { render } from "react-dom";
import { Counter } from "./components/Counter";

render(
    <div>
        <Counter />
    </div>,
    document.getElementById('root')
)