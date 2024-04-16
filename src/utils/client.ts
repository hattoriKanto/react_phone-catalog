import axios from 'axios';
import { Phone } from '../types/Phone';

export async function getPhones() {
  try {
    const response: Phone[] = (await axios.get('./api/phones.json')).data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
