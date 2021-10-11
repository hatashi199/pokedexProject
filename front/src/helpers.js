import axios from 'axios';

const getAxios = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

export { getAxios };
