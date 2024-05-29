import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useRouter} from "next/router";

const LoginForm = () => {
    const router = useRouter();
    const [isCorrect, setIsCorrect] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Обязательно'),
            password: Yup.string()
                .required('Обязательно'),
        }),
        onSubmit: values => {
            if(values.username !== "Qaz Stroy" && values.password !== "123") {
                setIsCorrect(true);
            }else {
                router.push("/partners")
            }
        },
    });

    return (
            <div className="flex flex-col items-center gap-[24px] bg-white px-[120px] py-[80px] rounded-[4px] shadow">
                    <img src="/img/logo.svg" alt="Logo" className="w-[90px]" />
                    <h2 className="text-2xl font-semibold">Войти в аккаунт</h2>
                <form onSubmit={formik.handleSubmit} className={"flex flex-col gap-[16px]"}>
                    <div className="">
                        <label className="text-[#6B7A80] text-[13px]" htmlFor="username">
                            Логин
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className={`border rounded w-full p-[12px] leading-tight ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
                        ) : null}
                    </div>
                    <div className="">
                        <label className="text-[#6B7A80] text-[13px]" htmlFor="password">
                            Пароль
                        </label>
                        <div className={`border rounded w-full p-[12px] leading-tight flex justify-between ${formik.touched.username && formik.errors.username ? 'border-red-500' : ''}`}
                        >
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className={"focus:outline-none"}
                            />
                            {
                                showPassword ? (
                                    <img src="/img/eye.png" className={`w-[16px]`} alt="" onClick={() => setShowPassword(false)}/>
                                ) : (
                                    <img src="/img/view-off.svg" alt=""  className={`w-[16px]`} onClick={() => setShowPassword(true)}/>
                                )
                            }
                        </div>
                        {!isCorrect && formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                        ) : null}
                        {
                            isCorrect &&
                            <p className="text-red-500 text-xs italic">Неправильный пароль или имя пользователя</p>
                        }
                    </div>
                    <button
                        type="submit"
                            className="bg-[#00A0E3] hover:bg-[#0087cd] text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Войти
                        </button>
                </form>
            </div>
    );
};

export default LoginForm;
