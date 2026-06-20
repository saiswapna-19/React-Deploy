import { useState, useEffect } from "react";


export default function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUser(){
        try{
            setLoading(true);
            setError(null);
            const response=await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            if(!response.ok){
                throw new Error("Failed to fetch data")
            }
            const data=await response.json();
            setData(data);
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false);
        }
    };
    fetchUser();
  }, []);
  return {data,loading, error};

}
