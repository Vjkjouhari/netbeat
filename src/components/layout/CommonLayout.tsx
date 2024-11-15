import { ReactNode } from "react";

interface CommonLayout {
  children: ReactNode;
  className?: string;
}

export default function CommonLayout({ children, className }: CommonLayout) {
  return (
    <div className={`flex items-center justify-center h-screen ${className}`}>
      <div className="w-3/4 md:w-2/4 lg:w-2/5 xl:3/5 2xl:w-1/4 flex flex-col items-center justify-center bg-[#B9E5E8] rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
