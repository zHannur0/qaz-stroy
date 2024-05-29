import { Inter } from "next/font/google";
import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";
import DocumentTable from "@/components/DocumentTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className={`min-h-screen items-center justify-center bg-[#F3F4F6] ${inter.className}`}>
                <Header/>
                <DocumentTable/>
            </div>
    );
}
