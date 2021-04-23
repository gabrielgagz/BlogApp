import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useForm } from '../../hooks/useForm';
import { addEditPost, getCategories } from '../../helpers/apiHelper';
import { toastHelper } from '../../helpers/toastHelper';
import '../../css/modals.css';

export const AddEditModal = ( { data } ) => {

    // Get edit and reload from context
    const { edit, reload, setReload } = useContext( AppContext );

    // Set state for category
    const [ categoryState, setCategoryState ] = useState();

    const initialForm = {
        id: (edit) ? data.id : '',
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

    // Load category data on init
    useEffect(() => {

        getCategories()
            .then(data => setCategoryState( data ))
            .catch(reason => console.log(reason.message));

    }, []);

    const validateValues = ( e ) => {

        e.preventDefault();

        if ( content === '' || image === '' || title === '' ) {
            toastHelper( '#addEditModal', 'You cannot send empty values.', 'ERROR' );
            return;
        }

        if ( content.length > 385 ) {
            toastHelper( '#addEditModal', 'Content max characters: 385', 'ERROR' );
            return;
        }

        if ( title.length > 50 ) {
            toastHelper( '#addEditModal', 'Title max characters: 50', 'ERROR' );
            return;
        }

        if ( categoryId === '' ) {
            toastHelper( '#addEditModal', 'You must choose a category', 'ERROR' );
            return;
        }

        if ( image.match(/^http.*\.(jpeg|jpg|gif|png)$/) === null ) {
            toastHelper( '#addEditModal', 'You must provide a valid image url', 'ERROR' );
            return;
        }

        handleInsert();

    }

    const handleInsert = () => {

        addEditPost( values, ( edit ) ? 'PATCH' : 'POST' )
            .then( data => {
                
                if (data.error) {
                    toastHelper( '#addEditModal', `ERROR: database operation has failed (${ data.error })`, 'ERROR' );
                    return
                }

                if (data.success) {

                // Change context to refresh layout
                setReload( !reload );

                document.querySelector('.btn-form-close').click();
                toastHelper( '.container-posts', `GREAT! Post has been processed.`, 'SUCCESS' );
                return
            }})
            .catch( err => toastHelper( '#addEditModal', `FATAL: ${err}`, 'ERROR' )  );

        reset(); 

    }


    return (
        <div
            className='modal fade'
            id='addEditModal'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabIndex='-1'
            aria-labelledby='addEditFormLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header modal-header-add bg-secondary py-2'>
                        <h5 className='modal-title' id='addEditFormLabel'>
                            <i className='fas fa-cloud-upload-alt mx-2'></i>
                            { ( edit ) ? 'Edit Post' : 'New Post' }
                        </h5>
                        <button
                            type='button'
                            className='btn-close btn-close-white'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body'>

                        <form id='modal-add' onSubmit={ validateValues }>
                            <div className='input-group flex-nowrap'>
                                <select 
                                    className='form-select'
                                    name='categoryId'
                                    value={ categoryId  }
                                    onChange={ handleInputChange }
                                    disabled= { ( edit ) ? true : false }
                                >
                                    <option value={ -1 }>
                                        Choose Category
                                    </option>
                                    {
                                        ( categoryState ) &&
                                        categoryState.map( (categoryData) => {

                                            return (
                                            <option value={ categoryData.id } key={ categoryData.id }>
                                                { categoryData.name }
                                            </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='input-group flex-nowrap' >
                            <input
                                autoComplete='false'
                                className='form-control'
                                type="date"
                                max={ date }
                                name="date"
                                value={ date }
                                selected={ date }
                                onChange={ handleInputChange }
                                required
                                />
                            </div>
                            <div className='input-group flex-nowrap'>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    maxLength='50'
                                    placeholder='Title' 
                                    name='title'
                                    value={ title }
                                    onChange={ handleInputChange }
                                    required
                                />
                            </div>
                            <div className='input-group flex-nowrap'>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Image Url'
                                    name='image'
                                    value={ image }
                                    onChange={ handleInputChange }
                                    required
                                />
                            </div>
                            <div className='input-group flex-nowrap'>
                                <textarea 
                                    className='form-control' 
                                    placeholder='Post content....'
                                    maxLength='385'
                                    name='content'
                                    rows="7"
                                    value={ content }
                                    onChange={ handleInputChange }
                                    required
                                />
                            </div>
                        </form>

                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-secondary btn-form-close px-3'
                            data-bs-dismiss='modal'
                            onClick={ reset }
                        >
                            Close
                        </button>
                        <button 
                            type='submit' 
                            className='btn btn-send py-2 px-4'
                            form='modal-add'
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
