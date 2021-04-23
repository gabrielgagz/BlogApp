import React, { useState, useEffect } from "react";
import { getPosts } from '../../helpers/apiHelper';
import "../../css/postlist.css";

export const PostsList = () => {

    // Post list state
    const [ dataState, setDataState ] = useState();

    // Effect to load post at init 
    // TODO: use context to reload content
    useEffect(() => {

        // Get all posts
        getPosts()
            .then(data => setDataState( data ))
            .catch(reason => console.log(reason.message));
        
    }, []);

    return (
        <div className="container-fluid px-5">
            <div className="row row-cols-1 row-cols-md-3 my-5 justify-content-center">
                {
                
                ( dataState ) &&
                
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
                                    alt={ data.category.name }
                                />
                                <div className="card-body">
                                    <div className={`card-category border border-${ categoryColor } border-2 rounded text-${ categoryColor } text-center py-1 px-3`}>
                                        <small>{ data.category.name }</small>
                                    </div>
                                    <h5 className="card-title mt-4 my-3">
                                        [ { data.title } ]
                                    </h5>
                                    <p>
                                        <span className="span-footer fw-light fst-italic text-muted">
                                            <small>By <span className="text-success">Author</span> - {  data.date.toString().substr(0,10) }</small>
                                                <small>
                                                    <i className="far fa-edit mx-2"></i>
                                                    <i className="far fa-trash-alt mx-2"></i>
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
        </div>
    );
};
