const getNewCart = async (token, cart) => { 
  
  const reqHeaders = new Headers();

  reqHeaders.append('Content-Type', 'application/json');
  reqHeaders.append('Authorization', "Bearer " + token);

  const res = await fetch('http://localhost:8000/api/v1/carts', {
    method: 'POST',
    headers: reqHeaders,
    body: JSON.stringify({"cart": cart})
  })

  const data = await res.json();
  const newCart = JSON.parse(localStorage.getItem('userInfo')) || [];
  newCart[0].cart = data.cart
  localStorage.setItem('userInfo', JSON.stringify(newCart))
  
  return console.log(data);
    
};
  
export default getNewCart;