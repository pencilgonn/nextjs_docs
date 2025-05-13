import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-[1232px] w-full px-4 py-10 mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
