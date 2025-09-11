const SideNav = () => {
    return (
        <div className="w-[20%] shadow-md">
            <p className="px-6 pb-3">menu</p>
            <div className="cursor-pointer flex gap-6 items-center w-full mt-[-11px] py-3 hover:bg-gray-100">
                <div className="w-1 h-10 bg-blue-400"></div>
                <div className="">IC</div>
                <div className="">Dashboard</div>
            </div>
             <div className="cursor-pointer flex gap-6 items-center w-full mt-[-5px] hover:bg-gray-100 py-4 px-7">
                <div className="">IC</div>
                <div className="">Settings</div>
            </div>
        </div>
    )
}

export default SideNav;