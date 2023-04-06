import { FC, ReactNode } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useAppSelector } from "@app/store/hooks";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const appState = useAppSelector((state) => state.app);
  return (
    <>
      <Header />
      {appState.showSidebar && <Sidebar />}
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
