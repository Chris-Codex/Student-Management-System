import { IoIosSettings } from "react-icons/io";
import { RiProfileFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { TiMessages } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../redux/alertSlice";
import apple from "../assets/images/apple.png"
import google from "../assets/images/google.png"
import university from "../assets/images/university.jpg"
import { IoIosArrowDown } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";



const Settings = () => {
    const settingsOpen = useSelector((state) => state.alert.settingsOpen)

    return (
        <main className="w-full mt-4">
            <section className="block md:hidden w-full flex flex-col items-center gap-4 shadow-md pb-6">

                <div className="flex items-center gap-3">
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
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={university} alt="google" className="w-10" />
                    <p className="text-[18px] font-poppins">E-School Online Academy</p>
                    <IoIosArrowDown size={20} color="gray" />
                </div>

            </section>

            {settingsOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute z-9999 right-0 cursor-pointer w-full max-w-74 shadow-md ml-auto mr-10 rounded-md z-50 bg-white"
                >
                    <div className="flex items-center gap-3 px-8 py-3 cursor-pointer hover:bg-gray-100">
                        <IoIosSettings size={25} />
                        <div className="text-[18px] font-poppins">Account Settings</div>
                    </div>
                    <div className="flex items-center gap-3 px-8 py-3 cursor-pointer hover:bg-gray-100">
                        <RiProfileFill size={25} />
                        <div className="text-[18px] font-poppins">Profile</div>
                    </div>
                    <div className="flex items-center gap-3 px-8 py-4 cursor-pointer hover:bg-gray-100">
                        <IoMdLogOut size={25} />
                        <div className="text-[18px] font-poppins">Logout</div>
                    </div>
                </motion.div>

            )}
        </main>
    )
}

export default Settings;