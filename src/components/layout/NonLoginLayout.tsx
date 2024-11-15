import { Outlet } from "react-router-dom";

export default function NonLoginLayout() {
  return (
    <div className="w-full h-screen bg-[#DFF2EB]">
      <Outlet />
    </div>
  );
}
