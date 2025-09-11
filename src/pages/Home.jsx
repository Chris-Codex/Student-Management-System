import { useSelector } from "react-redux";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import TopNav from "../components/TopNav";
import Settings from "../components/Settings";
import SideNav from "../components/SideNav";
import { toggleSideNav } from "../redux/alertSlice";

const Home = () => {
    const toggleSideNav = useSelector((state) => state.alert.toggleSideNav);

    return (
        <main className="w-full">
            <section className="w-full">
                <TopNav />
                <Settings />
            </section>

            <section className="flex mt-[-15px]">
                {!toggleSideNav && (
                    <SideNav />
                )}
                <div className={`bg-[#F5F9FA] transparent ${toggleSideNav ? "flex-1" : "w-full"}`}>RightSide</div>
            </section>
        </main>
    )
}

export default Home;