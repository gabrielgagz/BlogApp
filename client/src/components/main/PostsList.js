import React, { useContext, useState, useEffect } from "react";
import { getPosts } from '../../helpers/apiHelper';
import { AppContext } from '../../context/AppContext';
import { DeleteModal } from '../modal/DeleteModal';
import { AddEditModal } from "../modal/AddEditModal";
import "../../css/postlist.css";

export const PostsList = () => {

    const { setEdit, reload } = useContext( AppContext );

    // Save post id on a state
    const [idState, setIdState] = useState(0);

    // Post list state
    // TODO: improve
    const [ dataState, setDataState ] = useState( { init: 'init' } );

    // Data state for modal
    const [ modalDataState, setModalDataState ] = useState();

    // Effect to load post at init 
    useEffect(() => {

        // Get all posts
        getPosts()
            .then(data => setDataState( data ))
            .catch(reason => console.log(reason.message));
        
    }, [ reload ]);

    return (
        <div className="container-fluid container-posts px-5">
            <div className="row row-cols-1 row-cols-md-3 my-5 justify-content-center">
                {
                
                ( dataState.length > 0 ) &&
                
                // Map the results and print a card per item
                dataState.map( ( data ) => {

                    // Choose a random color for category label
                    const setCategoryColor = () => {

                        return ['info', 'warning', 'primary', 'secondary'].sort(() => Math.random() - Math.random()).slice(0,1);
                
                    }
                    const categoryColor = setCategoryColor();
                
                    return (
                        <div className="col" key={ data.id }>
                            <div className="card m-3 shadow border-0 animate__animated animate__fadeIn">
                                <img
                                    src={ data.image }
                                    className="card-img-top"
                                    alt={ data.category.name || 'Category' }
                                />
                                <div className="card-body">
                                    <div className={`card-category border border-${ categoryColor } border-2 rounded text-${ categoryColor } text-center py-1 px-3`}>
                                        <small>{ data.category.name || 'No Category' }</small>
                                    </div>
                                    <h5 className="card-title mt-4 my-3">
                                        [ { data.title } ]
                                    </h5>
                                    <div className='card-content my-3 blockquote-footer'>
                                        { data.content }
                                    </div>
                                    <p>
                                        <span className="span-footer fw-light fst-italic text-muted">
                                            <small>By <span className="text-success">Author</span> - {  data.date.toString().substr(0,10) }</small>
                                                <small>
                                                <button
                                                        className="btn-action"
                                                        data-bs-toggle='modal'      
                                                        data-bs-target='#addEditModal'
                                                        onClick={ () => { setEdit( true ); setModalDataState( data ) }}
                                                    >
                                                        <i className="far fa-edit mx-2"></i>
                                                    </button>
                                                    <button
                                                        className="btn-action"
                                                        data-bs-toggle='modal'      
                                                        data-bs-target='#deleteModal'
                                                        onClick={ () => setIdState( data.id ) }
                                                    >
                                                        <i className="far fa-trash-alt mx-2"></i>
                                                    </button>
                                                </small>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })

                }
            </div>
            { <DeleteModal id={ idState }/> }
            { <AddEditModal data={ modalDataState } /> }
        </div>
    );
};
