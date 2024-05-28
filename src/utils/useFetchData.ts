import axios from 'axios';
import { useState, useEffect } from 'react';
import { Favorite } from '../types/Favorites';
import { apiDBurl } from './config';
import { ProductExpanded } from '../types';

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
      throw new Error('Failed to fetch data');
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
      throw new Error('Failed to fetch data');
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

//c
async function addToFavorites(
  productId: number,
): Promise<void> {
  try {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId');

    if (id === null) {
      throw new Error('userId is null');
    }

    const userId = +id;

    if(!token) {
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

async function removeFromFavorites(
  productId: number,
): Promise<void> {
  try {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId');

    if (id === null) {
      throw new Error('userId is unavailable');
    }

    const userId = +id;

    if(!token) {
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
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId');

    if (id === null) {
      throw new Error('userId is unavailable');
    }

    const userId = +id;

    if(!token) {
      throw new Error('Token is unavailable');
    }

    const response = await axios.get(`${BASE_URL}users/${userId}/favorites`, {
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
async function isProductInFavorites(
  productId: number,
): Promise<boolean> {
  try {
    const favorites = await getUserFavorites();

    return favorites.some(
      (favorite: Favorite) => favorite.productId === productId,
    );
  } catch (error) {
    throw new Error('Failed to check if product is in favorites');
  }
}

async function getOneFavorite(
  productId: number,
): Promise<Favorite | null> {
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
};
