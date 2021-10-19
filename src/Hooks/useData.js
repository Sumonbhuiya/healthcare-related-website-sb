import { useEffect, useState } from "react";

const useData = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        // load data for services
        fetch(`https://sumonbhuiya.github.io/helthcare-data/services.json`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [service];
}
export default useData;