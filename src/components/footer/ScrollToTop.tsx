import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { setMasterState } from '../../store/slices';

export const ScrollToTop = () => {
    const dispatch = useAppDispatch();
    const pathname = useLocation();
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            dispatch(setMasterState({ key: "isBackToTopVisible", value: true }));
        } else {
            dispatch(setMasterState({ key: "isBackToTopVisible", value: false }));
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null;
};
