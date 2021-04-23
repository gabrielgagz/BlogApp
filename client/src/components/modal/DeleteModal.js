import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { deletePost } from '../../helpers/apiHelper';
import { toastHelper } from '../../helpers/toastHelper';
import '../../css/modals.css';

export const DeleteModal = ( {id} ) => {

    const { reload, setReload } = useContext( AppContext );

    const handleSubmit = ( e ) => {

        e.preventDefault();
    
        deletePost( id )
            .then( data => {
                
                if (data.error) {
                    toastHelper( '.container-posts', `ERROR: database operation has failed (${ data.error })`, 'ERROR' );
                    return
                }

                if (data.success) {

                // Change context to refresh layout
                setReload( !reload );

                document.querySelector('.btn-delete-close').click();
                toastHelper( '.container-posts', `GREAT! The post has been removed`, 'SUCCESS' );
                return
            }})
            .catch( err => toastHelper( '.container-posts', `FATAL: ${err}`, 'ERROR' )  );
    }

    return (
        <div
            className='modal fade'
            id='deleteModal'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            data-id=''
            tabIndex='-1'
            aria-labelledby='deleteModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header modal-header-delete p-2'>
                        <i className='fas fa-exclamation-triangle mx-2'></i>
                        <h5 className='modal-title' id='deleteModalLabel'>
                            WARNING!
                        </h5>
                        <button
                            type='button'
                            className='btn-close btn-close-white'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body text-center modal-delete-text'>
                        Are you sure you want to remove this post
                    </div>
                    <div className='modal-footer justify-content-center'>
                        <button
                            type='button'
                            className='btn btn-secondary btn-delete-close'
                            data-bs-dismiss='modal'
                        >
                            Cancel
                        </button>
                            <form onSubmit={ handleSubmit }> 
                            <button
                                type='submit' 
                                className='btn btn-danger'
                            >
                                Do it!
                            </button>
                            <span className='span-toast'></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
