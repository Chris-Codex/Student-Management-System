import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";

export const sideMenus = [
    {
      id: 1,
      key: "classes",
      label: "Classes",
      children: ["All Classes", "New Classes"],
      icon: SiGoogleclassroom,
      icon_menus: LuMinus,
      icon_plus: FiPlus,
    },
    {
      id: 2,
      key: "employees",
      label: "Employees",
      children: ["Staff List", "Roles", "Payroll"],
      icon: SiGoogleclassroom,
      icon_menus: LuMinus,
      icon_plus: FiPlus,
    },
    {
      id: 3,
      key: "fees",
      label: "Fees",
      children: ["Fee Structure", "Collections", "Reports"],
      icon: SiGoogleclassroom,
      icon_menus: LuMinus,
      icon_plus: FiPlus,
    },
    {
      id: 4,
      key: "behavior",
      label: "Behaviour & Skills",
      children: ["Reports", "Assessments"],
      icon: SiGoogleclassroom,
      icon_menus: LuMinus,
      icon_plus: FiPlus,
    },
  ];