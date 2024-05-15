import { useState, useEffect } from 'react';
// Custom hook for counter functionality
function useFetch(param, url, refreshIncrement) {
  // khai bao một state count
  const [data, setData] = useState(null); // State to keep track of count
  // Function call api
  useEffect(() => {
    let flag = false;
    fetch(`${url}/${param}`)
      .then((resStr) => {
        return resStr.json();
      })
      .then((res) => {
        if (!flag) {
          setData(res);
        }
        //setData(res);
      })
      .catch((err) => {
        console.log('err', err);
      });
    return () => (flag = true);
  }, [url, param, refreshIncrement]);
  return [data, setData];
}
export default useFetch;
