
  export const getFoodMenu = async() => {
      const response = await fetch('/api/foods/', {
        headers: {
          'token': window.localStorage.getItem('token')
        }
      });
      const json = await response.json();
      return json;
  }