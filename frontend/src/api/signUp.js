const signUp = async (userData) => { 
  
    const response = await fetch('http://localhost:8000/api/v1/register', 
      {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
      }
    );

    const data = await response.json();

    localStorage.setItem("userInfo", JSON.stringify([data]));

    return console.log(data);
};

export default signUp;