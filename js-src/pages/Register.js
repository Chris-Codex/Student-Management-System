const _jsxFileName = "src/pages/Register.tsx";import { HiUser } from "react-icons/hi2";
import { supabase } from "../util/supabaseClient";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router";

const Register = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({})
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleFailedToggle = () => {
        setFailed((prev) => !prev)
    }

    const handleSuccessToggle = () => {
        setSuccess((prev) => !prev)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({...prev, [name]: value}))
    };

    const validation = () => {
        const newErros = {};

        if (!form.firstname.trim()) newErros.firstname = "Firstname is required"
        if (!form.lastname.trim()) newErros.lastname = "Lastname is required"
        if (!form.email.includes("@")) newErros.email = "Email is required"
        if (!form.password.trim()) newErros.password = "Password is required"

        setError(newErros)
        return newErros;
    }

    const handleSubmit = async (e) => {
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
        React.createElement('section', { className: "relative w-screen h-screen  flex items-center justify-center bg-[#127F81]"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}
            , success && (
                React.createElement('div', { className: "absolute flex items-center gap-10 top-0 mx-3 mt-4 py-3 px-6 bg-[#DCF7E7]"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 89}}
                    , React.createElement('div', { className: "flex gap-3 items-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                        , React.createElement(IoMdCheckmark, { color: "green", size: 30, __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}} )
                        , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, React.createElement('span', { className: "font-bold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}}, "Success:"), " Registration was successful"   )
                    )
                    , React.createElement(FaXmark, { onClick: handleSuccessToggle, className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 94}} )
                )
            )

            , failed && (
                React.createElement('div', { className: "absolute flex items-center gap-10 top-0 mx-3 mt-4 py-3 px-6 bg-[#FDE6EA]"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}}
                    , React.createElement('div', { className: "flex gap-3 items-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
                        , React.createElement(BiErrorCircle, { color: "red", size: 30, __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}} )
                        , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, React.createElement('span', { className: "font-bold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}}, "Success:"), " Registration failed"  )
                    )
                    , React.createElement(FaXmark, { onClick: handleFailedToggle, className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 104}} )
                )
            )

            , React.createElement('div', { className: "border border-[2px] border-[#fff] rounded-md w-full max-w-[500px] px-10 p-10"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}
                , React.createElement('div', { className: "flex flex-col items-center justify-center pb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}}
                    , React.createElement(HiUser, { color: "#fff", size: 50, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} )
                    , React.createElement('p', { className: "font-500 text-[30px] text-[#fff]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 111}}, "Member Registration" )
                )

                , React.createElement('form', { onSubmit: handleSubmit, __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                    , React.createElement('div', { className: "flex flex-col" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}}
                        , React.createElement('input', { type: "text", 
                            name: "firstname",
                            value: form.firstname,
                            onChange: handleChange,
                            placeholder: "Firstname", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}}, error.firstname)
                    )

                    , React.createElement('div', { className: "flex flex-col mt-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 126}}
                        , React.createElement('input', { type: "text", 
                            name: "lastname",
                            value: form.lastname,
                            onChange: handleChange,
                            placeholder: "Lastname", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 127}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 134}}, error.lastname)
                    )

                    , React.createElement('div', { className: "flex flex-col mt-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 137}}
                        , React.createElement('input', { type: "text", 
                            name: "email",
                            value: form.email,
                            onChange: handleChange,
                            placeholder: "Email", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 138}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 145}}, error.email)
                    )

                    , React.createElement('div', { className: "flex flex-col mt-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}
                        , React.createElement('input', { type: "password", 
                            name: "password",
                            value: form.password,
                            onChange: handleChange,
                            placeholder: "Password", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 149}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 156}}, error.password)
                    )

                    , React.createElement('div', { className: "flex items-center justify-center mt-7"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}}
                        , React.createElement('button', { type: "submit", className: "cursor-pointer bg-[#1DA2A5] w-full max-w-[210px] rounded-md py-4 text-[#fff]"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 160}}, "REGISTER")
                    )

                    , React.createElement('div', { className: "flex items-center justify-center mt-7"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 163}}
                        , React.createElement('p', { className: "text-[#fff]", __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}, "Already a Member? "   , React.createElement(Link, { to: "/", className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 164}}, "Click to login"  ))
                    )
                )
            )
        )
    )
}

export default Register;