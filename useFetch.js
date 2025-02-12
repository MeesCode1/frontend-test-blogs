import { useState, useEffect } from "react";
    
    const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
          if (!res.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, [])

      return { data, isPending, error}
}

export default useFetch;