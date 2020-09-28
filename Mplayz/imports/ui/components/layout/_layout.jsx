import React from 'react';
import Header from './_header';
import Footer from './_footer';
import '../../../../public/src/css/layout/layout.css';

const Layout = ({children}) => {
    return(
        <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;