"use client"
import { URL } from "../../utils/URLS";
import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from "react";
import Breadcrumbs from "./BreadCrumbs";

export default function Welcome() {
    const [api, setApi] = useState<API>({
        description: "This is the AnimeVariant API. It is a RESTful API that allows you to access data about anime, manga, and characters.",
        endpoints: [
            {
                path: "/anime",
                description: "Returns a list of anime.",
                params: {}
            }
        ],
        author: "AnimeVariant",
        version: "1.0.0"

    });

    const breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: `Welcome`, url: `/welcome` },
    ];
  

    useEffect(() => {
        async function getApi() {
            const response = await axios.get(URL.DOCS);
            const api: API = response.data.api;
            setApi(api);
        }
        getApi();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-3xl font-bold mt-8 mb-4">Welcome to AnimeVariant API!</h1>
            <p>{api.description}</p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Available API Endpoints:</h2>
            <ul className="list-disc pl-6">
                {api.endpoints.map((endpoint, index) => (
                    <li key={index}>
                        <Link href={endpoint.path} className="text-xl font-bold mt-8 mb-4">
                            {endpoint.path}
                        </Link>
                        <p className="ml-4">{endpoint.description}</p>
                        <h5 className="text  mt-8 mb-4" >parameters:</h5>
                        <ul className="list-disc pl-6">
                            {Object.keys(endpoint.params).map((param, index) => (
                                <li key={index}>
                                    <p className="ml-4">{param}: {endpoint.params[param]}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4">Author:</h2>
            <p>{api.author}</p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Version:</h2>
            <p>{api.version}</p>
        </div>
    );
}

export async function getStaticProps() {
    const response = await axios.get(URL.DOCS);
    const api: API = response.data.api;

    return {
        props: {
            api,
        },
    };
}
