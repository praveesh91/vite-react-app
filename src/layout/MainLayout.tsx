import React from 'react';
import './Layout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

// Define the type for layout props
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/login', label: 'Login' },
  ];

  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar links={links} />
        <main className="layout-content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
