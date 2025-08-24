import { HiUser } from "react-icons/hi2";
import { supabase } from "../util/supabaseClient";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState<LoginValues>({
        email: "",
        password: ""
    })

    const [error, setError] = useState<FormErr>({})
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleFailedToggle = () => {
        setFailed((prev) => !prev)
    }

    const handleSuccessToggle = () => {
        setSuccess((prev) => !prev)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm((prev) => ({...prev, [name]: value}))
    };

    const validation = () => {
        const newErros: FormErrors = {};

        if (!form.email.includes("@")) newErros.email = "Email is required"
        if (!form.password.trim()) newErros.password = "Password is required"

        setError(newErros)
        return newErros;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(form)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: form.email,
                password: form.password,
            })

            if (error) {
                setFailed(true)
            } else {
                const validate = validation();

                if (Object.keys(validate).length === 0) {
                    setSuccess(true)

                    setForm({
                        email: "",
                        password: ""
                    })

                    navigate("/home")
                }
            }
        }catch(error){
            console.log(error)
        }
    }


    return (
        <section className="relative w-screen h-screen  flex items-center justify-center bg-[#127F81]">
            {success && (
                <div className="absolute flex items-center gap-10 top-10 mx-3 mt-4 py-3 px-6 bg-[#DCF7E7]">
                    <div className="flex gap-3 items-center">
                        <IoMdCheckmark color="green" size={30} />
                        <p><span className="font-bold">Success:</span> Login was successful</p>
                    </div>
                    <FaXmark onClick={handleSuccessToggle} className="cursor-pointer" />
                </div>
            )}

            {failed && (
                <div className="absolute flex items-center gap-10 top-10 mx-3 mt-4 py-3 px-6 bg-[#FDE6EA]">
                    <div className="flex gap-3 items-center">
                        <BiErrorCircle color="red" size={30} />
                        <p><span className="font-bold">Failed:</span> Email or Password is incorrect</p>
                    </div>
                    <FaXmark onClick={handleFailedToggle} className="cursor-pointer" />
                </div>
            )}

            <div className="border border-[2px] border-[#fff] rounded-md w-full max-w-[500px] px-10 p-10">
                <div className="flex flex-col items-center justify-center pb-4">
                    <HiUser color="#fff" size={50} />
                    <p className="font-500 text-[30px] text-[#fff]">Member Login</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col mt-7"> 
                        <input type="text" 
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                        {error && <span className="text-red-600 text-[15px]">{error.email}</span>}
                    </div>

                    <div className="flex flex-col mt-7"> 
                        <input type="password" 
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                        {error && <span className="text-red-600 text-[15px]">{error.password}</span>}
                    </div>

                    <div className="flex items-center justify-center mt-7">
                        <button type="submit" className="cursor-pointer bg-[#1DA2A5] w-full max-w-[210px] rounded-md py-4 text-[#fff]">REGISTER</button>
                    </div>
                    
                    <div className="flex items-center justify-center mt-7">
                        <p className="text-[#fff]">Not yet a Member? <Link to="/register" className="cursor-pointer">Click to register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;