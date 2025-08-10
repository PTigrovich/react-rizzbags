import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import { I18nextProvider } from 'react-i18next';
import i18n from './data/i18n';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);
root.render(
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
);
