//import Head from 'next/head';
import Navbar from "./Navbar";
import Head from "./Head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import ClassNames from 'classnames';

const Layout = ({ children, titlePage, footer = true, dark, title }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head titlePage={titlePage} />
      <div className={ClassNames({'bg-dark':dark})}>
        <Navbar />
        <main className="container py-4">
          
          {title && (
            <h1 className={ClassNames('text-center',{'text-light': dark })}>{title}</h1>
          )}
          {children}</main>

        {footer && (
          <footer className="bg-dark text-light text-center py-4">
            <div className="container">
              <h1>&copy; Ryan Ray Portafolio</h1>
              <p>2000 - {new Date().getFullYear()}</p>
              <p>All rights Reserverd</p>
            </div>
          </footer>
        )}
      </div>
    </>
  );
};

export default Layout;
