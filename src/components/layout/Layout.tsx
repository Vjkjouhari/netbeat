import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Header/Header";
import { SideBar } from "./SideBar";

export default function Layout() {
  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 mt-14">
        <SideBar />
        <main className="flex-1 ml-[16.67%]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
