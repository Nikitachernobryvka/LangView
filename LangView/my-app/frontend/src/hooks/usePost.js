import { useState } from "react";

export const usePost = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (body) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const result = await res.json();
            setData(result);
            return result;
        }

        catch (err) {
            setError(err);
        }

        finally {
            setLoading(false);
        }
    };

    return {data, loading, error, postData};
}
