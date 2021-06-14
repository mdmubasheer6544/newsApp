import React, { useState, useEffect } from "react";
import axios from "axios";

const useCallData = (url) => {
  const [newsData, setNewsData] = useState([]);
  const[isLoading,setIsLoading]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
      const response = await axios.get(url);
      setNewsData(response.data.articles);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  return {
    value: newsData,
    isLoading:isLoading,
  };
};

export default useCallData;
