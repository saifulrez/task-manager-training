import Footer from "@/components/task-manager/Footer";
import Header from "@/components/task-manager/Header";
import Sidenav from "@/components/task-manager/Sidenav";

export default function TaskManagerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidenav />
                <main className="flex-1 bg-gray-50 p-6">{children}</main>
            </div>
            <Footer />
        </div>
    );
}