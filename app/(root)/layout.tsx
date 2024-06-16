import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <section>
          <LeftSidebar />
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        RightSidebar
      </div>
      Toaster
    </main>
  );
};

export default Layout;
