import axios from 'axios';
import { useState, useEffect } from 'react';
import { Favorite } from '../types/Favorites';
import { apiDBurl } from './config';
import { Product, ProductExpanded, ProductInCart } from '../types';

const BASE_URL = apiDBurl;

//test data token
// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJDaHJpc3RpbmEyIiwiaWF0IjoxNzE2ODIxNjU5LCJleHAiOjE3MTk0MTM2NTl9.tHE6xxlPtvgo59vmBlpTLyQZaBhr5pb_8ffU3HH98Ow';

type FetchState<T> = {
  data: T[];
  isLoading: boolean;
  error: Error | null;
};

function useFetchData<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T[]>(BASE_URL + url);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError(new Error('Failed to fetch data'));
        } else {
          setError(new Error('An unknown error occurred'));
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

async function getOneProductBySlug(url: string) {
  try {
    const response = await axios.get<ProductExpanded>(BASE_URL + url);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to fetch product by slug');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

async function getProductsByNamespaceId(url: string, namespaceId: string) {
  try {
    const response = await axios.get<ProductExpanded[]>(BASE_URL + url, {
      params: { namespaceId },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to fetch products by namespaceID');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

async function getRecommendedProducts(url: string) {
  try {
    const response = await axios.get<Product[]>(BASE_URL + url);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to fetch recommended');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

//c
async function addToFavorites(productId: number): Promise<void> {
  try {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (id === null) {
      throw new Error('userId is null');
    }

    const userId = +id;

    if (!token) {
      throw new Error('Token is unavailable');
    }

    const response = await axios.post(
      `${BASE_URL}users/favorites`,
      {
        userId,
        productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to add to favorites');
  }
}

async function removeFromFavorites(productId: number): Promise<void> {
  try {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    if (id === null) {
      throw new Error('userId is unavailable');
    }

    const userId = +id;

    if (!token) {
      throw new Error('Token is unavailable');
    }

    const response = await axios.delete(`${BASE_URL}users/favorites`, {
      data: { userId: userId, productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to remove from favorites');
  }
}

async function getUserFavorites() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return [];
    }

    const response = await axios.get(`${BASE_URL}users/user/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch favorites');
  }
}

async function getDiscounts() {
  try {
    const response = await axios.get(`${BASE_URL}discount`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch discounts');
  }
}

async function getNewProducts() {
  try {
    const response = await axios.get(`${BASE_URL}products/new`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch new products');
  }
}

//c
async function isProductInFavorites(productId: number): Promise<boolean> {
  try {
    const favorites = await getUserFavorites();

    return favorites.some(
      (favorite: Favorite) => favorite.productId === productId,
    );
  } catch (error) {
    throw new Error('Failed to check if product is in favorites');
  }
}

async function getOneFavorite(productId: number): Promise<Favorite | null> {
  try {
    const favorites = await getUserFavorites();
    const favorite = favorites.find(
      (favorite: Favorite) => favorite.productId === productId,
    );

    return favorite || null;
  } catch (error) {
    throw new Error('Failed to find the favorite');
  }
}

//cart
async function getUserCart(): Promise<ProductInCart[]> {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      return [];
    }

    const response = await axios.get(`${BASE_URL}cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cart products');
  }
}

async function getOneProductInCart(
  productId: number,
): Promise<ProductInCart | null> {
  try {
    const cart = await getUserCart();
    const product = cart.find(
      (productInCart: ProductInCart) => productInCart.productId === productId,
    );

    return product || null;
  } catch (error) {
    throw new Error('Failed to find the product');
  }
}

async function addProductToCart(productId: number): Promise<ProductInCart> {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token is unavailable');
    }

    const response = await axios.post(
      `${BASE_URL}cart`,
      {
        productId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to add product in cart');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

async function deleteProductFromCart(productId: number) {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token is unavailable');
    }

    await axios.delete(`${BASE_URL}cart`, {
      data: { productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to delete product from cart');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

async function isProductInCart(productId: number) {
  try {
    const cart = await getUserCart();

    const currentProduct =
      cart.find((product: ProductInCart) => product.productId === productId) ||
      null;

    return Boolean(currentProduct);
  } catch (error) {
    throw new Error('Failed to check if product is in cart');
  }
}

async function deleteAll() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token is unavailable');
    }

    await axios.delete(`${BASE_URL}cart/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to delete all products in cart');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

async function changeQuantityOnOneProduct(
  productId: number,
  quantity: number,
): Promise<ProductInCart> {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token is unavailable');
    }

    const response = await axios.put(
      `${BASE_URL}cart`,
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error('Failed to change quantity of product in cart');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

//user
async function registerUser(
  username: string,
  email: string,
  password: string,
): Promise<void> {
  try {
    const response = await axios.post(`${BASE_URL}registration`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to register');
  }
}

async function loginUser(username: string, password: string): Promise<void> {
  try {
    const response = await axios.post(`${BASE_URL}login`, {
      username,
      password,
    });

    localStorage.setItem('token', response.data.accessToken);
    localStorage.setItem('userId', response.data.user.id);
    localStorage.setItem('userName', response.data.user.username);
    window.dispatchEvent(new Event('storage'));
    return response.data;
  } catch (error) {
    throw new Error('Failed to login');
  }
}

export default useFetchData;
export {
  getOneProductBySlug,
  getProductsByNamespaceId,
  addToFavorites,
  removeFromFavorites,
  getUserFavorites,
  isProductInFavorites,
  getOneFavorite,
  registerUser,
  loginUser,
  getDiscounts,
  getNewProducts,
  getRecommendedProducts,
  getUserCart,
  addProductToCart,
  deleteProductFromCart,
  isProductInCart,
  deleteAll,
  getOneProductInCart,
  changeQuantityOnOneProduct,
};
