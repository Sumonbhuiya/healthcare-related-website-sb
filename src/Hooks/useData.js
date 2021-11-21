import { useEffect, useState } from "react";

const useData = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        // load data for services
        fetch(`https://sumonbhuiya.github.io/json-all-data/doctors.JSON`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [service];
}
export default useData;