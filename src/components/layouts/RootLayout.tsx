import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col  grow min-h-dvh">
      <Header />
      <div className="max-w-[1232px] w-full px-4 grow py-10 mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
