import {React, useEffect} from 'react';

const LocalStorage = ({toDos, setToDos}) => {
    useEffect(() => {
        let toDos = localStorage.getItem('toDos')
        toDos && setToDos(JSON.parse(toDos))
    }, [])

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos])

    return (
        <>
        </>
    )
};

export default LocalStorage;