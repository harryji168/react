const BASE_URL = 'http://localhost:3000/api';

export const Details = {
    index(params) {
      return fetch(`${BASE_URL}/details`, {
        headers: {
          'Content-Type': 'application/json'
        },        
        method: 'POST',
        body: JSON.stringify(params)
      })
      .then((res) => {
        return res.json();
      })
    }
}