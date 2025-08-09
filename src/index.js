import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import Main from './pages/Main/Main';
import About from './pages/About/About';



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
root.render(<RouterProvider router={router} />);
