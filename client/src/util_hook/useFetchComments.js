import { useEffect, useState } from "react"

export default function useFetchComments() {

    const [commetsApi, setCommetsApi] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const url = "http://localhost:5000/reviews";

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
                            id: data[key].id,
                            recipeName: data[key].recipeName,
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