import { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineCheck } from 'react-icons/ai'

export const InputComp = ({ placeholder, type, className, setValue, value }) => (
    <input
        placeholder={placeholder}
        className={className}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
    />
)

export const ButtonComp = ({ text, className, submitDetails }) => (
    <button
        className={className}
        onClick={submitDetails}
    >{text}</button>
)

export const Todos = ({ todoData, deleteTodo, updateTaskCompleated, updateTaskToInCompleated }) => {



    return (
        <div
            className={`flex items-center rounded-md justify-between my-3   md:p-2 p-1 ${todoData.compleated ? 'bg-red-600' : 'bg-blue-600'}`}

        >
            <div className='flex items-center overflow-hidden md:pl-0 pl-1  pb-1'>
                {
                    todoData.compleated ?

                        <div
                            className='md:w-4 w-3 md:h-4 h-3 relative rounded-sm bg-white mt-1 flex items-center justify-center'

                        >
                            <AiOutlineCheck
                                color="#000"
                                className=' md:text-base text-sm absolute'
                                onClick={() => updateTaskToInCompleated(todoData.id)}
                            />
                        </div>
                        :
                        <div
                            className='md:w-4 w-3 md:h-4 h-3 rounded-sm bg-white mt-1'
                            onClick={() => updateTaskCompleated(todoData.id)}
                        >
                        </div>
                }
                <p className={`text-white ml-4 md:text-lg  ${todoData.compleated && 'line-through'}`}>{todoData.todo}</p>
            </div>
            <TiDeleteOutline
                className='cursor-pointer'
                size={18}
                color={todoData.compleated ? 'white' : 'red'}
                onClick={() => deleteTodo(todoData.id)}
            />
        </div>
    )
}