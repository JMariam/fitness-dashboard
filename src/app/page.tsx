import Sidebar from "@/components/Sidebar";
import User from "@/components/User";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <User/>
    </div>
  );
}
