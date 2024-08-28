import  { ReactNode } from 'react';
import './Layout.css'
import Header from '../components/common/Header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="appContainer">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;