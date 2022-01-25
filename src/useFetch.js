import { useEffect, useState } from "react";
import { getAllNews } from "./redux/newsSlice";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const [error, seterror] = useState(null);
  const [isloading, setisloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const abort = new AbortController();
    fetch(url, { signal: abort.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setisloading(false);
        dispatch(getAllNews(data.articles));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch stopped");
        } else {
          console.log(err.message);
          seterror(err);
          setisloading(false);
        }
      });
    return () => abort.abort();
  }, [url, dispatch]);

  return { error, isloading };
};

export default useFetch;
