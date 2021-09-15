import { useEffect } from 'react';

export default function(targetRef, handler) {
    function outsideClick({ target }) {
        if (!targetRef.current || targetRef.current.contains(target)) return;

        handler();
    }

    useEffect(() => {
        document.addEventListener('click', outsideClick);

        return () => document.removeEventListener('click', outsideClick);
    }, []);
}
