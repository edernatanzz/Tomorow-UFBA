export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Erro ao carregar produtos');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
