import { AiOutlineHome } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { sideMenus } from "../util/sideMenus";
import { toggleSideMenuDropdown } from "../redux/alertSlice";


const SideNav = () => {
    const openSideMenuDropdown = useSelector((state) => state.alert.openSideMenuDropdown)

    const dispatch = useDispatch()

    return (
        <div className="w-full h-screen max-w-[20%] shadow-md">
            <p className="px-6 pt-4 pb-3 font-poppins font-semibold">menu</p>
            <div className="flex items-center gap-4">
                <div className="w-1 h-10 bg-blue-400"></div>
                <AiOutlineHome size={20} />
                <div className="font-bold text-blue-400">Dashboard</div>
            </div>

            {sideMenus.map((menu) => {
                const Icon = menu.icon
                const subMenu = menu.children

                return (
                    <div className="w-full mt-3" key={menu.id}>
                        <div onClick={() => dispatch(toggleSideMenuDropdown(menu.id))} className={`cursor-pointer flex justify-between items-center px-5 w-full mt-[-11px] py-3 hover:bg-gray-100 ${openSideMenuDropdown === menu.id ? "bg-gray-100" : ""}`}>
                            <div className="flex items-center gap-4">
                                <Icon size={18} />
                                <div className="font-roboto font-medium text-gray-500">{menu.label}</div>
                            </div>
                            <div className="">
                                {openSideMenuDropdown === menu.id ? <menu.icon_menus /> : <menu.icon_plus /> }  
                            </div>
                        </div>

                        {openSideMenuDropdown === menu.id && (
                            <>
                                {subMenu.map((sub_menu, j) => {
                                    return (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            key={j} className="flex  gap-8 px-5">
                                            <div className="w-[1px] bg-blue-400"></div>
                                            <div className="flex items-center text-gray-500">
                                                <div className="font-small my-2 font-roboto">{sub_menu}</div>  
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default SideNav;