import  { ReactNode } from 'react';
import './Layout.css'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="appContainer">{children}</div>
    </div>
  );
};

export default Layout;