import { useSate, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = '';

  useEffect(async () => {
    const response = await axios(API)
    setMap(response.data.results[0].geometry.location);
  }, [])

  return map;
}

export default useGoogleAddress;