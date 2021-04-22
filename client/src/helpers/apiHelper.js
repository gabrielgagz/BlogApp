export const getPosts = async () => {

    const response = await fetch(`${ process.env.REACT_APP_API_KEY }/posts`);
    return await response.json();

}