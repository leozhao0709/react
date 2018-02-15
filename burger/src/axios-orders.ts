import Axios from 'axios';

const ordersAxios = Axios.create({
  baseURL: 'https://react-my-burger-8c24c.firebaseio.com/'
});

export default ordersAxios;