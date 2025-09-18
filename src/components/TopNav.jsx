import logo from "../assets/images/Black-Gold.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch, toggleSetting, toggleSideNav } from "../redux/alertSlice";
import apple from "../assets/images/apple.png"
import google from "../assets/images/google.png"
import university from "../assets/images/university.jpg"
import { IoIosArrowDown } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

const TopNav = () => {
    const open = useSelector((state) => state.alert.open);


    const dispatch = useDispatch();

    return (
        <main className="w-full">
            <section className="hidden md:flex w-full flex justify-between items-center py-5 shadow-md">
                <div className="basis-1/4 flex justify-between items-center w-full pl-8">
                    <img src={logo} alt="logo" className="cursor-pointer w-20" />
                    <div className="cursor-pointer" onClick={() => dispatch(toggleSideNav())}>
                        <RxHamburgerMenu size={25} />
                    </div>
                </div>

                <div className="flex justify-between items-center basis-4/4 px-10">
                    <div className="flex items-center">
                        {!open && (
                            <div onClick={() => dispatch(toggleSearch())}>
                                <FiSearch size={25} color="gray" className="cursor-pointer" />
                            </div>
                        )}

                        {open && (
                            <motion.div
                                key="searchbox"
                                initial={{ opacity: 10, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.98 }}
                                className="flex items-center"
                            >
                                <div onClick={() => dispatch(toggleSearch())}>
                                    <RiCloseLine size={25} color="gray" className="cursor-pointer" />
                                </div>
                                <input type="text" placeholder="Search Student" className="w-80 pl-3 outline-none" autoFocus />
                                <FiSearch size={25} color="gray" />
                            </motion.div>
                        )}
                    </div>

                    <div className="flex items-center gap-6">
                        <img src={apple} alt="apple" className="w-30" />
                        <img src={google} alt="google" className="w-30" />
                        <div className="flex gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.0, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="relative cursor-pointer"
                            >
                                <RxDotFilled size={27} color="#06c168" className="absolute top-[-9px] left-3" />
                                <TiMessages size={25} color="gray" />
                            </motion.div>
                            <motion.div
                                animate={{ scale: [1, 1.0, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="relative cursor-pointer"
                            >
                                <RxDotFilled size={27} color="pink" className="absolute top-[-9px] left-3" />
                                <IoMdNotifications size={25} color="black" />
                            </motion.div>
                        </div>

                        <div onClick={() => dispatch(toggleSetting())} className="flex items-center gap-3 cursor-pointer">
                            <img src={university} alt="google" className="w-10" />
                            <p className="text-[18px] font-poppins">E-School Online Academy</p>
                            <IoIosArrowDown size={20} color="gray" />
                        </div>
                    </div>
                </div>
            </section>

            {/*Mobile TopNav*/}
            <section className="md:hidden w-full mt-10 flex items-center justify-between px-8">
                <div className="cursor-pointer">
                    <RxHamburgerMenu size={25} />
                </div>
                <img src={logo} alt="logo" className="cursor-pointer w-20" />
                <BiDotsHorizontalRounded size={20} />
            </section>
        </main>
    )
}

export default TopNav;