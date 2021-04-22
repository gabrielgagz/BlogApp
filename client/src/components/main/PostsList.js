import React from 'react';

export const PostsList = () => {
    return (
        <div className='container-fluid'>
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            <div className="col">
                <div className="card m-4 shadow border-0">
                    <img
                        src="https://images.pexels.com/photos/5476235/pexels-photo-5476235.jpeg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
                <div className="card m-4 shadow border-0">
                    <img
                        src="https://images.pexels.com/photos/5476235/pexels-photo-5476235.jpeg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
