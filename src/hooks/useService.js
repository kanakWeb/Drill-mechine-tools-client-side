import { useEffect, useState } from "react";

const useService=()=>{
    const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://shielded-chamber-56561.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [services]
}
export default useService;