import DocsLayout from "@/components/layouts/DocsLayout";
import { ReactNode } from "react";

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <DocsLayout>{children}</DocsLayout>;
};

export default AppProvider;
