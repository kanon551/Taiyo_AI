import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";

interface SideBarProps {
  closeSideDrawer: () => void;
  isOpen: boolean;
}


const SideBar = ({isOpen,closeSideDrawer }:SideBarProps) => {

    const [link, setLink] = useState<string>('');

    const location = useLocation();
    let path = location.pathname;

    useEffect(() => {
        for (let i = 0; i < path.length; i++) {
            path = path.replace("/", " ");
        }
        path = path.trim();
    
        let stringArray = path.split(" ");
        setLink(stringArray[0]);
      }, [location]);

  return (
    <>
              {
            !isOpen &&
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-#fffbf6 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar" style={{width:'10rem'}}>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-#fffbf6 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="contacts" 
                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white ${link === "contacts" ? 'bg-white shadow' : ''}`}>
                            <svg aria-hidden="true" 
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 176.646 176.646" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M89.96,96.038l3.2-3.678c-1.547,0.56-3.145,0.895-4.835,0.895c-1.689,0-3.285-0.347-4.844-0.907l3.203,3.69h0.088
                                            l-8.257,19.973l9.816,9.797l9.821-9.797l-8.263-19.973H89.96z"/>
                                        <path d="M140.364,0H36.285C25.163,0,16.121,9.036,16.121,20.152v4.582h12.596c4.177,0,7.557,3.392,7.557,7.56
                                            c0,4.171-3.379,7.55-7.557,7.55H16.121V52.75h12.596c4.177,0,7.557,3.392,7.557,7.557c0,4.171-3.379,7.551-7.557,7.551H16.121
                                            v12.909h12.596c4.177,0,7.557,3.385,7.557,7.557c0,4.171-3.379,7.557-7.557,7.557H16.121v12.908h12.596
                                            c4.177,0,7.557,3.38,7.557,7.551c0,4.165-3.379,7.557-7.557,7.557H16.121v12.903h12.596c4.177,0,7.557,3.386,7.557,7.55
                                            c0,4.166-3.379,7.563-7.557,7.563H16.121v4.579c0,11.119,9.042,20.154,20.165,20.154h104.079c11.119,0,20.161-9.035,20.161-20.154
                                            V20.152C160.531,9.036,151.489,0,140.364,0z M53.301,117.18c0-9.743,11.237-22.914,26.369-26.756
                                            c-6.321-4.253-10.687-12.669-10.687-20.24c0-10.675,8.656-19.354,19.342-19.354c10.693,0,19.352,8.68,19.352,19.354
                                            c0,7.571-4.372,15.987-10.705,20.24c15.15,3.842,26.379,17.013,26.379,26.756C123.345,128.712,53.301,128.712,53.301,117.18z"/>
                            </svg>
                            <span className="ml-3">Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="charts" 
                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white ${link === "charts" ? 'bg-white shadow' : ''}`}>
                            <svg aria-hidden="true" 
                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="ml-3">Charts</span>
                            </a>
                        </li>
                        <li>
                            <a href="maps" 
                            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white ${link === "maps" ? 'bg-white shadow' : ''}`}>
                            <svg aria-hidden="true" 
                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" 
                            viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                               <path stroke="#000000" strokeWidth="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/>
                                <circle cx="96" cy="74" r="20" stroke="#000000" strokeWidth="12"/>
                            </svg>
                            <span className="ml-3">Maps</span>
                            </a>
                        </li>
                    </ul>
                </div>
                </aside>
        }
        


        {
            isOpen && 
            <div  className="fixed z-[9999] pointer-events-auto bg-white box-border w-full shadow-2xl shadow-blue-gray-900/10 top-0 left-0 p-4" data-projection-id="283" style={{maxWidth:'300px',maxHeight: '100%',height: '100vh',transform: 'none', transitionProperty:'transform',transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',transitionDuration:'150ms'}}>
                    <div className="mb-6 flex items-center justify-between">
                        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                            Side Bar
                        </h5>
                        <button onClick={closeSideDrawer} className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                    <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white">
                            <svg aria-hidden="true" 
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 176.646 176.646" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M89.96,96.038l3.2-3.678c-1.547,0.56-3.145,0.895-4.835,0.895c-1.689,0-3.285-0.347-4.844-0.907l3.203,3.69h0.088
                                            l-8.257,19.973l9.816,9.797l9.821-9.797l-8.263-19.973H89.96z"/>
                                        <path d="M140.364,0H36.285C25.163,0,16.121,9.036,16.121,20.152v4.582h12.596c4.177,0,7.557,3.392,7.557,7.56
                                            c0,4.171-3.379,7.55-7.557,7.55H16.121V52.75h12.596c4.177,0,7.557,3.392,7.557,7.557c0,4.171-3.379,7.551-7.557,7.551H16.121
                                            v12.909h12.596c4.177,0,7.557,3.385,7.557,7.557c0,4.171-3.379,7.557-7.557,7.557H16.121v12.908h12.596
                                            c4.177,0,7.557,3.38,7.557,7.551c0,4.165-3.379,7.557-7.557,7.557H16.121v12.903h12.596c4.177,0,7.557,3.386,7.557,7.55
                                            c0,4.166-3.379,7.563-7.557,7.563H16.121v4.579c0,11.119,9.042,20.154,20.165,20.154h104.079c11.119,0,20.161-9.035,20.161-20.154
                                            V20.152C160.531,9.036,151.489,0,140.364,0z M53.301,117.18c0-9.743,11.237-22.914,26.369-26.756
                                            c-6.321-4.253-10.687-12.669-10.687-20.24c0-10.675,8.656-19.354,19.342-19.354c10.693,0,19.352,8.68,19.352,19.354
                                            c0,7.571-4.372,15.987-10.705,20.24c15.15,3.842,26.379,17.013,26.379,26.756C123.345,128.712,53.301,128.712,53.301,117.18z"/>
                            </svg>
                            <span className="ml-3">Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white">
                            <svg aria-hidden="true" 
                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="ml-3">Charts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white">
                            <svg aria-hidden="true" 
                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" 
                            viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                               <path stroke="#000000" strokeWidth="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"/>
                                <circle cx="96" cy="74" r="20" stroke="#000000" strokeWidth="12"/>
                            </svg>
                            <span className="ml-3">Maps</span>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
        }
    </>
  )
}

export default SideBar
