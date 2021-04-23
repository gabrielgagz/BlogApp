export const getPosts = async () => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/posts`);
    return await response.json();

}

export const addEditPost = async ( data, method ) => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/posts`, { 
        method: method, 
        body: JSON.stringify( data ),
        headers: {'Content-Type': 'application/json'} });
    return await response.json();

}

export const deletePost = async ( id ) => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/posts/${ id }`, { method: 'DELETE', headers: {'Content-Type': 'application/json'} });
    return await response.json();

}

export const getCategories = async () => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/categories`);
    return await response.json();

}