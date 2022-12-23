import React, { FunctionComponent } from "react";

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (<div>Layout
    {children}
  </div>);
}

export default Layout;