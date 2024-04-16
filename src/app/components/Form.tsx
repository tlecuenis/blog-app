"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FormData } from "../types/blog"

const inputClass =
'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault()
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    return(
       <form className="max-w-md mx-auto p-4 space-y-4" onSubmit={handleSubmit}>
            
            <input type="text" className={inputClass} placeholder="Enter the title" name="title" value={formData.title} onChange={handleChange}/>
            <textarea className={inputClass} placeholder="Enter the content" name="content" value={formData.content} onChange={handleChange}>

            </textarea>
            <button type="submit" className="bg-sky-500 hover:bg-sky-700 text-white rounded-md w-full disabled:bg-gray-400">
                Guardar
            </button>
        
       </form>
    )
};
