import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useForm } from '../../hooks/useForm';

export const AddEditModal = ( { edit, data } ) => {

    const { reload, setReload } = useContext( AppContext );

    const initialForm = {
        categoryId: (edit) ? data.categoryId : '',
        content: (edit) ? data.content : '',
        date: (edit) ? data.date.toString().substr(0,10) : new Date().toISOString().split('T')[0],
        image: (edit) ? data.image : '',
        title: (edit) ? data.title : ''
    }

    const [ values, handleInputChange, reset ] = useForm( initialForm );

    const { categoryId, content, date, image, title } = values;

    // Reset form according to props
    useEffect( () => {

        reset(); 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ edit, data ] );


    return (
        <div>
            
        </div>
    )
}
