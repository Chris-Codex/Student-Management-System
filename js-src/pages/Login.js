const _jsxFileName = "src/pages/Login.tsx";import { HiUser } from "react-icons/hi2";
import { supabase } from "../util/supabaseClient";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BiErrorCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/Spinner";
import { hideLoading } from "../redux/alertSlice";

const Login = () => {
    const loading = useSelector((state) => state.loading) 
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [form, setForm] = useState({
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

        if (!form.email.includes("@")) newErros.email = "Email is required"
        if (!form.password.trim()) newErros.password = "Password is required"

        setError(newErros)
        return newErros;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

       

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
        }finally{
            dispatch(hideLoading(false))
        }
    }

    return (
        React.createElement('section', { className: "relative w-screen h-screen  flex items-center justify-center bg-[#127F81]"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}
            , success && (
                React.createElement('div', { className: "absolute flex items-center gap-10 top-10 mx-3 mt-4 py-3 px-6 bg-[#DCF7E7]"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 90}}
                    , React.createElement('div', { className: "flex gap-3 items-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}
                        , React.createElement(IoMdCheckmark, { color: "green", size: 30, __self: this, __source: {fileName: _jsxFileName, lineNumber: 92}} )
                        , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}, React.createElement('span', { className: "font-bold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}}, "Success:"), " Login was successful"   )
                    )
                    , React.createElement(FaXmark, { onClick: handleSuccessToggle, className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 95}} )
                )
            )

            , failed && (
                React.createElement('div', { className: "absolute flex items-center gap-10 top-10 mx-3 mt-4 py-3 px-6 bg-[#FDE6EA]"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}
                    , React.createElement('div', { className: "flex gap-3 items-center"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}
                        , React.createElement(BiErrorCircle, { color: "red", size: 30, __self: this, __source: {fileName: _jsxFileName, lineNumber: 102}} )
                        , React.createElement('p', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}, React.createElement('span', { className: "font-bold", __self: this, __source: {fileName: _jsxFileName, lineNumber: 103}}, "Failed:"), " Email or Password is incorrect"     )
                    )
                    , React.createElement(FaXmark, { onClick: handleFailedToggle, className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 105}} )
                )
            )


            , loading && (
                React.createElement(Spinner, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 111}} )
            )
            , React.createElement('div', { className: "border border-[2px] border-[#fff] rounded-md w-full max-w-[500px] px-10 p-10"       , __self: this, __source: {fileName: _jsxFileName, lineNumber: 113}}
                , React.createElement('div', { className: "flex flex-col items-center justify-center pb-4"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 114}}
                    , React.createElement(HiUser, { color: "#fff", size: 50, __self: this, __source: {fileName: _jsxFileName, lineNumber: 115}} )
                    , React.createElement('p', { className: "font-500 text-[30px] text-[#fff]"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 116}}, "Member Login" )
                )

                , React.createElement('form', { onSubmit: handleSubmit, __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}

                    , React.createElement('div', { className: "flex flex-col mt-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 121}}
                        , React.createElement('input', { type: "text", 
                            name: "email",
                            value: form.email,
                            onChange: handleChange,
                            placeholder: "Email", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 122}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 129}}, error.email)
                    )

                    , React.createElement('div', { className: "flex flex-col mt-7"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 132}}
                        , React.createElement('input', { type: "password", 
                            name: "password",
                            value: form.password,
                            onChange: handleChange,
                            placeholder: "Password", 
                            className: "border border-[#fff] bg-[#E7E7E7] h-13 px-5 text-[15px]"     , __self: this, __source: {fileName: _jsxFileName, lineNumber: 133}}
                        )
                        , error && React.createElement('span', { className: "text-red-600 text-[15px]" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 140}}, error.password)
                    )

                    , React.createElement('div', { className: "flex items-center justify-center mt-7"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}}
                        , React.createElement('button', { type: "submit", className: "cursor-pointer bg-[#1DA2A5] w-full max-w-[210px] rounded-md py-4 text-[#fff]"      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 144}}, "REGISTER")
                    )

                    , React.createElement('div', { className: "flex items-center justify-center mt-7"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 147}}
                        , React.createElement('p', { className: "text-[#fff]", __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}, "Not yet a Member? "    , React.createElement(Link, { to: "/register", className: "cursor-pointer", __self: this, __source: {fileName: _jsxFileName, lineNumber: 148}}, "Click to register"  ))
                    )
                )
            )
        )
    )
}

export default Login;

