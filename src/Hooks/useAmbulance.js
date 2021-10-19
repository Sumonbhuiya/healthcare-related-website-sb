import { useEffect, useState } from 'react';

const useAmbulance = () => {
    const [ambulance, setAmbulance] = useState([]);

    useEffect(() => {
        // load data 
        fetch(`https://sumonbhuiya.github.io/helthcare-data/ambulance.json`)
            .then(res => res.json())
            .then(data => setAmbulance(data));
    }, []);
    return [ambulance];
}

export default useAmbulance;