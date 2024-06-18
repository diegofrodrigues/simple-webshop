const getProducts = async () => { 

  const res = await fetch('http://localhost:8000/api/v1/products', {
    method: 'GET',
    headers: {'Content-Type': 'application/json' },
  });

  const data = await res.json();
  return data;
 
};

export default getProducts;