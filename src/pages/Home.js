

import React, { useEffect, useState } from 'react'
import { ButtonComp, InputComp, Todos } from '../components/Reuse'
import { auth, db } from '../firebase'
import { addDoc, updateDoc, getDocs, deleteDoc, doc, collection, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'


const Home = () => {

    const [todos, setTodos] = useState('')

    const [alltodos, setAllTodos] = useState([])

    const userid = auth.currentUser.uid

    const submitTodo = async () => {
        await addDoc(collection(db, 'todos', userid, 'mytodo'), {
            todo: todos,
            createAt: Timestamp.fromDate(new Date()),
            compleated: false
        })
        console.log(todos)
        setTodos('')
    }


    const deleteTodo = async (id) => {
        window.confirm('Are you Sure About That.')
        await deleteDoc(doc(db, 'todos', userid, 'mytodo', id))
    }

    const updateTaskCompleated = async (id) => {
        await updateDoc(doc(db, 'todos', userid, 'mytodo', id), {
            compleated: true
        })

    }
    const updateTaskToInCompleated = async (id) => {

        await updateDoc(doc(db, 'todos', userid, 'mytodo', id), {
            compleated: false
        })

    }


    useEffect(() => {
        const q = query(collection(db, "todos", userid, 'mytodo'), orderBy("createAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const someTodos = [];
            querySnapshot.forEach((doc) => {
                someTodos.push({ ...doc.data(), id: doc.id });

            });
            setAllTodos(someTodos)
        });
    }, [])
    return (
        <div className='homeContainer p-5'>
            <div className='bg-white text-center rounded-lg ring-2 ring-red-400'>
                <h1 className='md:text-lg font-semibold p-2'>Your Small Tasks!.</h1>
            </div>
            <div
                className='mt-5 flex items-center'
            >
                <InputComp
                    placeholder="todos.."
                    className={'w-3/4 md:h-10 h-8 rounded-md outline-none px-3'}
                    setValue={setTodos}
                    value={todos}
                />
                <ButtonComp
                    text="Add"
                    className={'block ml-7 bg-transparent ring-1 ring-blue-600 text-white rounded-lg md:py-2 py-1 md:px-8 px-5'}
                    submitDetails={submitTodo}

                />
            </div>

            <div
                className='mt-8'
            >
                {
                    alltodos.map(todoData => (
                        <Todos
                            key={todoData.id}
                            deleteTodo={deleteTodo}
                            todoData={todoData}
                            updateTaskCompleated={updateTaskCompleated}
                            updateTaskToInCompleated={updateTaskToInCompleated}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home