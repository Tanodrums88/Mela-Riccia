import { useEffect, useState } from "react"

export default function useFetchComments(url) {

    const [commetsApi, setCommetsApi] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setIsLoading(true)
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Something went wrong!');
                    }

                    const data = await response.json();

                    const comments = [];

                    for (const key in data) {
                        comments.push({
                            id: key,
                            name: data[key].name,
                            user: data[key].user,
                            review: data[key].review,
                            valutation: data[key].valutation,
                            date: data[key].date,
                            approved: data[key].approved
                        });
                    }
                    setCommetsApi(comments)
                } catch (error) {
                    setError(error.message)
                } finally {
                    setIsLoading(false)
                }
            }
        )()
    }, [url]);

    return { commetsApi, error, isLoading }

};