import logo from "../assets/images/Black-Gold.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../redux/alertSlice";


const TopNav = () => {
    const open = useSelector((state) => state.alert.open);

    const dispatch = useDispatch();

    return (
        <section className="w-full flex justify-between items-center py-5 shadow-md">
            <div className="basis-1/4 flex justify-between items-center w-full pl-8">
                <img src={logo} alt="logo" className="cursor-pointer w-20" />
                <RxHamburgerMenu size={30} className="cursor-pointer" />
            </div>

            <div className="flex justify-between items-center basis-4/4 px-10">
                <div className="flex items-center">
                    {!open && (
                        <FiSearch size={20} color="gray" onClick={() => dispatch(toggleOpen())} />
                    )}

                    {open && (
                        <motion.div
                            key="searchbox"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20}}
                            transition={{ duration: 0.3 }}
                            className="flex items-center"
                        >
                            <RiCloseLine onClick={() => dispatch(toggleOpen())} size={25} color="gray" className="cursor-pointer" />
                            <input type="text" placeholder="Search Student" className="w-80 pl-3 outline-none" autoFocus />
                            <FiSearch size={20} color="gray" />
                        </motion.div>
                    )}
                </div>

                <div className="">LeftSide</div>
            </div>
        </section>
    )
}

export default TopNav;