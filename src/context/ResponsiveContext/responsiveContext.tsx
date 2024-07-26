import { createContext, useEffect, useState } from "react";
import { IResponsive } from "./types";

export const ResponsiveContext = createContext<IResponsive>({} as IResponsive);

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [responsive, setResponsive] = useState<IResponsive>({
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth <= 1024 && window.innerWidth > 768,
    isDesktop: window.innerWidth > 1024,
  });
  useEffect(() => {
    const handleResize = () => {
      setResponsive({
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth <= 1024 && window.innerWidth > 768,
        isDesktop: window.innerWidth > 1024,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
};
