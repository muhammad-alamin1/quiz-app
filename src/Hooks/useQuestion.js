import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestion(videoId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestion = async () => {
            const db = getDatabase();
            const quizRef = ref(db, 'quiz/' + videoId + '/questions');
            const quizQuery = query(
                quizRef,
                orderByKey(),
            );

            try {
                setError(false);
                setLoading(true);

                // request database
                const snapshot = await get(quizQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, Object.values(snapshot.val())]
                    });
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestion();
    }, [videoId]);

    return {
        loading,
        error,
        questions
    }
}
