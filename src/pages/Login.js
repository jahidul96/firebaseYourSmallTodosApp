import React, { useState } from 'react'
import { ButtonComp, InputComp } from '../components/Reuse'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = ({ setShow }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitDetails = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            console.log('login succesfull')
        } catch (err) {
            console.log(err.message)
        }

    }
    return (
        <div
            className='h-screen w-full flex justify-center items-center bg-gray-600'
        >
            <div
                className='
                w-80 
                h-2/4
                bg-red-500 
                singinAndLoginWrapper
                '

            >
                <InputComp
                    placeholder='email'
                    className='inputStyle'
                    setValue={setEmail}
                />
                <InputComp
                    placeholder='password'
                    className='inputStyle'
                    setValue={setPassword}
                    type={'password'}
                />

                <ButtonComp
                    text='Login'
                    className="bg-gray-500 btnStyle "
                    submitDetails={submitDetails}
                />
                <div
                    className='
                    text-center
                    mt-3
                    '
                >
                    <p
                        className='text-white underline cursor-pointer text-sm'
                        onClick={() => setShow(false)}
                    >Don't have Account? Singup!</p>
                </div>

            </div>
        </div>

    )
}

export default Login