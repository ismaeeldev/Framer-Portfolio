import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const MainLayout = ({ children }) => {
    return (
        <main>
            <Sidebar />

            <div className="main-content">
                <Navbar />
                {/* subtle page transition */}
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </main>
    );
};

export default MainLayout;
