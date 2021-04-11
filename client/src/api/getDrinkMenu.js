export const getDrinkMenu = async() => {
    const response = await fetch('/api/drinks/', {
      headers: {
        'token': window.localStorage.getItem('token')
      }
    });
    const json = await response.json();
    return json;
}