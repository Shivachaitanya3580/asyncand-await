
async function fetchFilteredData() {
    try {
      
      const response = await fetch('https://fakestoreapi.com/products');
      
    
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
    
      const data = await response.json();
      
      
      const filteredProducts = data.filter(product => product.rating.rate > 3.5 && product.price > 200);
      
      console.log(filteredProducts);
    } catch (error) {
     
      console.error('Error:', error);
    }
  }
  
 fetchFilteredData();
  