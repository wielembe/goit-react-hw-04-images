import axios from 'axios';

const baseURL =
  'https://pixabay.com/api/?key=39919801-cd3556a07d6c2157d605c68ff';

export default async function getItems(querry, page = 1) {
  const url = `${baseURL}&q=${querry}s&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;
  const response = await axios.get(url);

  return response;
}
