const storeCart = async (dat, token) => { 

  const res = await fetch('http://localhost:8000/api/v1/carts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer lumeFcb8g5qcH1i3HEQlrmQmg0PhkiFW6vygDzmv48a62a0c',
     },
    body: JSON.stringify({
      "user_id":"1"
    })
  })
  
  const data = await res.json();
  return console.log(data);
};

export default storeCart;