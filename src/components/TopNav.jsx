import logo from "../assets/images/Black-Gold.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../redux/alertSlice";
import apple from "../assets/images/apple.png"
import google from "../assets/images/google.png"
import university from "../assets/images/university.jpg"
import { IoIosArrowDown } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const TopNav = () => {
    const open = useSelector((state) => state.alert.open);

    const dispatch = useDispatch();

    return (
        <section className="w-full flex justify-between items-center py-5 shadow-md">
            {/*Mobile Top-Nav*/}
            <div className="w-full flex items-center justify-between px-8">
                <div className="cursor-pointer">
                    <RxHamburgerMenu size={25}  />
                </div>
                <img src={logo} alt="logo" className="cursor-pointer w-20" />
                <BiDotsHorizontalRounded size={30} />
            </div>

            
            <div className="hidden md:block lg:block basis-1/4 flex justify-between items-center w-full pl-8">
                <img src={logo} alt="logo" className="cursor-pointer w-20" />
                <div className="cursor-pointer">
                    <RxHamburgerMenu size={25}  />
                </div>
            </div>

            <div className="hidden md:block lg:block flex justify-between items-center basis-4/4 px-10">
                <div className="flex items-center">
                    {!open && (
                        <div onClick={() => dispatch(toggleOpen())}>
                            <FiSearch size={25} color="gray" className="cursor-pointer"  />
                        </div>
                    )}

                    {open && (
                        <motion.div
                            key="searchbox"
                            initial={{ opacity: 10, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20}}
                            transition={{ duration: 0.98 }}
                            className="flex items-center"
                        >
                            <div onClick={() => dispatch(toggleOpen())}>
                                <RiCloseLine size={25} color="gray" className="cursor-pointer" />
                            </div>
                            <input type="text" placeholder="Search Student" className="w-80 pl-3 outline-none" autoFocus />
                            <FiSearch size={25} color="gray" />
                        </motion.div>
                    )}
                </div>

                <div className="hidden md:block lg:block flex items-center gap-4">
                    <img src={apple} alt="apple" className="w-30" />
                    <img src={google} alt="google" className="w-30" />
                    <div className="flex gap-2">
                        <motion.div
                            animate={{ scale: [1, 1.0, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="cursor-pointer"
                        >
                            <TiMessages size={25} color="gray" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.0, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="cursor-pointer"
                        >
                            <IoMdNotifications size={25} color="black" />
                        </motion.div>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img src={university} alt="google" className="w-10" />
                        <p className="text-[18px]">E-School</p>
                        <IoIosArrowDown size={20} color="gray" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopNav;