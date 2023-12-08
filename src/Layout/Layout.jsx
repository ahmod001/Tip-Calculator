import { } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Calculator from '../Components/Calculator/Calculator';

const Layout = () => {
    return (
        <main className='bg-cyan-100' >
            <section className='min-h-screen pt-20 space-y-10'>
                <Header />
                <Calculator />
            </section>
            <Footer />
        </main>
    );
};

export default Layout;