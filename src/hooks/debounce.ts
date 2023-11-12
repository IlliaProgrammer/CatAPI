
import { useState, useEffect } from 'react';
export function useDebounce(value: string, delay: number = 300): string{
    const [debaunce, setDebaunce] = useState(value)

    useEffect(()=>{
        const handle = setTimeout(() => setDebaunce(value), delay);
        return ()=> clearTimeout(handle)
    }, [value, delay])

    return debaunce
}