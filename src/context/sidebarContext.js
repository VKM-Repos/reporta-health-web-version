import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// create new context
const SidebarContext = createContext({});

export default function SidebarProvider({ children }) {
    const [open, setOpen] = useState(true);
    const ref = useRef();
    const router = useRouter();

    const toggle = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);

    // set the html tag style overflow to hidden
    useEffect(() => {
        document.documentElement.style.overflow = 'hidden';
    }, []);

    // close side navigation when route changes
    useEffect(() => {
        if (open) {
            router.events.on('routeChangeStart', () => setOpen(false));
        }

        return () => {
            if (open) {
                router.events.off('routeChangeStart', () => setOpen(false));
            }
        };
    }, [open, router]);

    // close side navigation on click outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                if (!open) return;
                setOpen(false);
            }
        };
        window.addEventListener('click', handleOutsideClick);
        return () => window.removeEventListener('click', handleOutsideClick);
    }, [open, ref]);

    return (
        <SidebarContext.Provider value={{ open, ref, toggle }}>
            {children}
        </SidebarContext.Provider>
    );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
    return useContext(SidebarContext);
}
