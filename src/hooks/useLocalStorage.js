import { useState, useEffect } from "react";

const useLocalStorage = function (itemName, initialValue) {
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1500);
    },[])


    function saveItem(item) {
        const stringifiedItems = JSON.stringify(item)
        localStorage.setItem(itemName, stringifiedItems)
        setItem(item)
    }

    return { error, item, loading, saveItem }
}

export { useLocalStorage }
