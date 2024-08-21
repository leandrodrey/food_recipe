import {useEffect, useState} from 'react';

const useFetch = (initialUrl) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(initialUrl);
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [initialUrl]);

    const manualFetch = () => {
        fetchData();
    };

    return {data, isLoading, error, manualFetch};
};

export default useFetch;
