import React ,{lazy,Suspense,useReducer,useState} from 'react'

const PersonInformation = lazy(()=> import('./PersonInformation'))
const Persons = () => {
    const [person,setPerson] = useState('Default');
    const [show,toggle] = useReducer((state)=> !state ,false);
    return (
        <div className='person_wrapper'>
            <h1>All the info you need about a person</h1>
            <div>
            <button onClick={toggle}>Toggle Details</button>
            </div>
            <button onClick={()=> setPerson('Avi')}>Avi</button>
            <button onClick={()=> setPerson('Bavi')}>Bavi</button>
            <button onClick={()=> setPerson('cAvi')}>cAvi</button>
            <Suspense fallback={<div>Loading....</div>}>
               {show && <PersonInformation name={person}></PersonInformation>}
            </Suspense>
        </div>
    )
}

export default Persons
