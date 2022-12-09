import { Outlet } from 'react-router-dom';

// @ts-ignore
import Header from '../Header/Header.tsx';

function Layout()  {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout;