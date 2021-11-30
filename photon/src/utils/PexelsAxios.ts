import axios from 'axios';

const PexelsAxios = axios.create({
  headers: {
    Authorization: '563492ad6f91700001000001ff582c0562ab4aa4ad430570bebf5c49',
  },
});

export default PexelsAxios;
