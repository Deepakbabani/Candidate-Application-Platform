import { useState, useEffect } from "react";

const useInfiniteScroll = (fetchDataCallback) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchDataCallback(page);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(newData.length > 0);
    } catch (error) {
      console.error("Error fetching Jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, loadMore, hasMore };
};

export default useInfiniteScroll;
