import React from 'react'
import Categorize from '../components/Categorize'
import Cloze from '../components/Cloze'
import Navbar from '../components/Navbar'
import Comprehension from '../components/Comprehension'

const FormBuilder = () => {
    return (
        <>
            <Navbar />
            <Categorize />
            <Cloze />
            <Comprehension />
        </>
    )
}

export default FormBuilder