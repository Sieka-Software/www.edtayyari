import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitionBar = () => {
    const [widthPercentage, setWidthPercentage] = useState(0); // Percentage for loading bar
    const [loading, setLoading] = useState(false);             // Control visibility
    const location = useLocation();                            // Detect route changes

    useEffect(() => {
        setLoading(true);
        setWidthPercentage(0);

        const loadingInterval = setInterval(() => {
            setWidthPercentage((prev) => {
                const newPercentage = prev + Math.random() * 10;
                return newPercentage >= 90 ? 90 : newPercentage;
            });
        }, 100);

        const timeout = setTimeout(() => {
            setWidthPercentage(100);
            clearInterval(loadingInterval);

            setTimeout(() => {
                setLoading(false);
            }, 100);
        }, 500);

        // Cleanup function
        return () => {
            clearTimeout(timeout);
            clearInterval(loadingInterval);
        };
    }, [location]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [loading])

    return (
        loading && (
            <div className="transition-bar" style={{ width: `${widthPercentage}%` }} />
        )
    );
};

export { PageTransitionBar};
