const signOut = async (token) => { 
  
    const reqHeaders = new Headers();
  
    reqHeaders.append('Content-Type', 'application/json');
    reqHeaders.append('Authorization', 'Bearer ' + token);
  
    const res = await fetch('http://localhost:8000/api/v1/logout', {
      method: 'POST',
      headers: reqHeaders,
    })

    const data = await res.json();
  
    return console.log(data);
    
  };
  
export default signOut;