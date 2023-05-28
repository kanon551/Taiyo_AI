import React, { useState } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}


const Layout = (props: Props) => {

  const { children, window } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenDrawer = () => {
    setIsOpen(true);
  };

  const toggleCloseDrawer = () => {
    setIsOpen(false)
  }


  return (
    <div style={{ backgroundColor: "#fffbf6" }}>

      <Header openSideBar={toggleOpenDrawer} />

      <SideBar isOpen={isOpen} closeSideDrawer={toggleCloseDrawer} />

      <div className="p-4 sm:ml-40">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14" style={{ height: '100vh' }}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default Layout
