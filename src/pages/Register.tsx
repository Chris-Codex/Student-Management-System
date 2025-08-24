import { HiUser } from "react-icons/hi2";
import { supabase } from "../util/supabaseClient.js";
import { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastename: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm((prev) => ({...prev, [name]: value}))
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



    }


    return (
        <section className="w-screen h-screen  flex items-center justify-center bg-[#127F81]">
            <div className="border border-[2px] border-[#fff] rounded-md w-full max-w-[500px] px-10 p-10">
                <div className="flex flex-col items-center justify-center pb-4">
                    <HiUser color="#fff" size={50} />
                    <p className="font-500 text-[30px] text-[#fff]">Member Registration</p>
                </div>

                <form>
                    <div className="flex flex-col"> 
                        <input type="text" 
                            name="firstname"
                            placeholder="Firstname" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                    </div>

                    <div className="flex flex-col mt-7"> 
                        <input type="text" 
                            name="lastname"
                            placeholder="Lastname" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                    </div>

                    <div className="flex flex-col mt-7"> 
                        <input type="text" 
                            name="email"
                            placeholder="Email" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                    </div>

                    <div className="flex flex-col mt-7"> 
                        <input type="password" 
                            name="password"
                            placeholder="Password" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                    </div>

                    <div className="flex items-center justify-center mt-7">
                        <button className="cursor-pointer bg-[#1DA2A5] w-full max-w-[210px] rounded-md py-4 text-[#fff]">REGISTER</button>
                    </div>
                    
                    <div className="flex items-center justify-center mt-7">
                        <p className="text-[#fff]">Already a Member? <span className="cursor-pointer">Click to login</span></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;