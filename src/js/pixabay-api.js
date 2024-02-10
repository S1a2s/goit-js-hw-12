import axios from 'axios';

export async function fetchImages(searchValue, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const searchParams = new URLSearchParams({
    key: '41861239-c6b09579488337e808a164f07',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
  });

  const res = await axios.get(
    `${BASE_URL}/?${searchParams}&q=${searchValue}&page=${page}`
  );
  
  return res.data;
}
