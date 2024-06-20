const checkout = async (token, itemData) => { 
  
  const reqHeaders = new Headers();

  reqHeaders.append('Content-Type', 'application/json');
  reqHeaders.append('Authorization', "Bearer " + token);

  const res = await fetch('http://localhost:8000/api/v1/checkout', {
    method: 'POST',
    headers: reqHeaders,
    body: itemData
  })

  const data = await res.json();

  return console.log(data);
  
};

export default checkout;