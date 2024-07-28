import { createContext, useEffect, useState } from "react";
import { IResponsive } from "./types";

export const ResponsiveContext = createContext<IResponsive>({} as IResponsive);

export const ResponsiveProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [responsive, setResponsive] = useState<IResponsive>({
    isMobileLow: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setResponsive({
        isMobileLow: width < 500,
        isMobile: width < 768,
        isTablet: width > 768 && width < 1024,
        isDesktop: width > 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  );
};
