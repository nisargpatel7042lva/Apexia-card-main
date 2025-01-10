"use client";

import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";

export default function HomePage() {
    const [data, setData] = useState([]);

    const query = `
        *[_type == "swagData"] {
            userId,
            firstName,
            lastName,
            designation,
            email
        }
    `;
    const fetchData = async () => {
        const data = await client.fetch(query);
        return data;
    };

    useEffect(() => {
        fetchData().then((data) => { setData(data) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}