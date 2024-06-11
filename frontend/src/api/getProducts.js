const getProducts = async () => { 

  try{

    const res = await fetch('http://localhost:8000/api/v1/products', {
      method: 'GET',
      headers: {'Content-Type': 'application/json' },
    });

  const data = await res.json();
  return data;

  }catch{
    const data = await res.json(
      {"status":" Api offline"}
    );
    return console.log(data);

  }
};

export default getProducts;