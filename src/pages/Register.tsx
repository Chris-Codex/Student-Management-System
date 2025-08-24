import { HiUser } from "react-icons/hi2";
import { supabase } from "../util/supabaseClient";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router";

const Register = () => {
    const [form, setForm] = useState<AuthValues>({
        firstname: "",
        lastname: "",
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

        if (!form.firstname.trim()) newErros.firstname = "Firstname is required"
        if (!form.lastname.trim()) newErros.lastname = "Lastname is required"
        if (!form.email.includes("@")) newErros.email = "Email is required"
        if (!form.password.trim()) newErros.password = "Password is required"

        setError(newErros)
        return newErros;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase.auth.signUp({
                email: form.email,
                password: form.password,

                options: {
                    data: {
                        firstname: form.firstname,
                        lastname: form.lastname,
                        display_name: `${form.firstname} ${form.lastname}`
                    }
                }
            })

            if (error) {
                setFailed(true)
            } else {
                const validate = validation();

                if (Object.keys(validate).length === 0) {
                    setSuccess(true)

                    setForm({
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: ""
                    })
                }
            }
        }catch(error){
            console.log(error)
        }
    }


    return (
        <section className="relative w-screen h-screen  flex items-center justify-center bg-[#127F81]">
            {success && (
                <div className="absolute flex items-center gap-10 top-0 mx-3 mt-4 py-3 px-6 bg-[#DCF7E7]">
                    <div className="flex gap-3 items-center">
                        <IoMdCheckmark color="green" size={30} />
                        <p><span className="font-bold">Success:</span> Registration was successful</p>
                    </div>
                    <FaXmark onClick={handleSuccessToggle} className="cursor-pointer" />
                </div>
            )}

            {failed && (
                <div className="absolute flex items-center gap-10 top-0 mx-3 mt-4 py-3 px-6 bg-[#FDE6EA]">
                    <div className="flex gap-3 items-center">
                        <BiErrorCircle color="red" size={30} />
                        <p><span className="font-bold">Success:</span> Registration failed</p>
                    </div>
                    <FaXmark onClick={handleFailedToggle} className="cursor-pointer" />
                </div>
            )}

            <div className="border border-[2px] border-[#fff] rounded-md w-full max-w-[500px] px-10 p-10">
                <div className="flex flex-col items-center justify-center pb-4">
                    <HiUser color="#fff" size={50} />
                    <p className="font-500 text-[30px] text-[#fff]">Member Registration</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col"> 
                        <input type="text" 
                            name="firstname"
                            value={form.firstname}
                            onChange={handleChange}
                            placeholder="Firstname" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                        {error && <span className="text-red-600 text-[15px]">{error.firstname}</span>}
                    </div>

                    <div className="flex flex-col mt-7"> 
                        <input type="text" 
                            name="lastname"
                            value={form.lastname}
                            onChange={handleChange}
                            placeholder="Lastname" 
                            className="border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"
                        />
                        {error && <span className="text-red-600 text-[15px]">{error.lastname}</span>}
                    </div>

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
                        <p className="text-[#fff]">Already a Member? <Link to="/" className="cursor-pointer">Click to login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;