import { Inter } from "next/font/google";
import LoginForm from "@/components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className={`min-h-screen flex items-center justify-center bg-[#F3F4F6] text-black ${inter.className}`}>
    <LoginForm/>
  </div>
  );
}
