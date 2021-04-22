import React from "react";
import "../../css/postlist.css";

export const PostsList = () => {
    return (
        <div className="container-fluid px-5">
            <div className="row row-cols-1 row-cols-md-3 my-5 justify-content-center">
                <div className="col">
                    <div className="card m-2 shadow border-0 animate__animated animate__fadeIn">
                        <img
                            src="https://images.pexels.com/photos/5476235/pexels-photo-5476235.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <div className="card-category border border-warning border-2 rounded text-warning text-center py-1 px-3">
                                <small>CATEGORY</small>
                            </div>
                            <h5 className="card-title mt-4 my-3">
                                [ Card title, a long card title ]
                            </h5>
                            <p>
                                <span className="fw-light fst-italic text-muted">
                                    <small>By <span className="text-success">Author</span> - 2021-04-21</small>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2 shadow border-0 animate__animated animate__fadeIn">
                        <img
                            src="https://images.pexels.com/photos/5476235/pexels-photo-5476235.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <div className="card-category border border-warning border-2 rounded text-warning text-center py-1 px-3">
                                <small>CATEGORY</small>
                            </div>
                            <h5 className="card-title mt-4 my-3">
                                [ Card title, a long card title ]
                            </h5>
                            <p>
                                <span className="fw-light fst-italic text-muted">
                                    <small>By <span className="text-success">Author</span> - 2021-04-21</small>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
