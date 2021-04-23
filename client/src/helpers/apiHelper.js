export const getPosts = async () => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/posts`);
    return await response.json();

}

export const addEditPost = async ( data, method ) => {

    console.log( data )

    const apiUrl = ( method === 'PATCH' ) ? `${ process.env.REACT_APP_API_KEY }/posts/${ data.id }` : `${ process.env.REACT_APP_API_KEY }/posts`;

    console.log( apiUrl, method )

    const response = await fetch( apiUrl, { 
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