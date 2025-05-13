import RootLayout from "@/components/layouts/RootLayout";
import { ReactNode } from "react";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default AppProvider;
