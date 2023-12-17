import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
)