import { useEffect } from "react";
import { useState } from "react";

const useAxios = (configObj) => {
  const { axios, method, url } = configObj;
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoadinge] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios[method.toLowerCase()](url, {
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoadinge(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [axios, method, url]);

  return [response, error, loading];
};
export default useAxios;
