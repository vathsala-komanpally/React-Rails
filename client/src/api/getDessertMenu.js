export const getDessertMenu = async() => {
    const response = await fetch('/api/desserts/', {
      headers: {
        'token': window.localStorage.getItem('token')
      }
    });
    const json = await response.json();
    return json;
}