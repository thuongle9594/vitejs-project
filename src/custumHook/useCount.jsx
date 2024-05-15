import { useState } from 'react';
// Custom hook for counter functionality
function useCounter(initialValue = 0) {
  // khai bao một state count
  const [count, setCount] = useState(initialValue); // State to keep track of count

  // Function to increment count
  const increment = () => setCount((prevState) => prevState + 1);
  //                                  0.         0 + 1
  //                                  1.         1 + 1

  // Returns count and increment function
  return [count, increment];
}

// hook nay dung de tang gia tri len môt dơn vị khi gọi

// export custom hook
export default useCounter;
