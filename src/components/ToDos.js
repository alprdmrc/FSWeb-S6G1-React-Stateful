import React, { useState } from "react";

const db_toDoList = [
    { id:1, isDone: false, task: 'Ekmek al' },
    { id:2, isDone: false, task: 'Evi boya' },
    { id:3, isDone: false, task: 'Faturalari Ode' },
    { id:4, isDone: false, task: 'Kod calis' },
    { id:5, isDone: false, task: 'Uyu' },
]


export default function ToDo() {
    const [toDoList, setToDoList] = useState(db_toDoList);
    const [input,setInput] = useState('');

    
    const yapilacakEkle = () => {

        const id = toDoList.length+1
        setToDoList((prev)=> [
            ...prev,
            {
                id:id,
                isDone:false,
                task:input
            }
        ]);
    }

    const classAdiAl = item => {
        !item.isDone ? 'active' : 'passive'
    }

    const completeTask = (id) => {
        toDoList.map((task)=>{
            if (id === task.id) {
                task.isDone = !task.isDone
            }
        })
    }


    return (
        <div className="widget-todos container">
            <h2>ToDo List</h2>
            <button id="addInput" onClick={yapilacakEkle}>Ekle</button>
            <input id='input' value={input} type='text' onInput={(e)=>{setInput(e.target.value)}}/>
            
            {
            toDoList.map(item =>
                    <div key={item.id}>
                        <p className={`todo ${classAdiAl(item.isDone)}`}>{item.task}</p>
                        <input onClick={()=>completeTask(item.id)} type='checkbox' />
                    </div>
                )
            }

        </div>
    );
}