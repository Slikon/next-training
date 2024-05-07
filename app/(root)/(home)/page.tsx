import React from "react";
// import RandomComponent from "@/components/RandomComponent";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  console.log("i am client");
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
