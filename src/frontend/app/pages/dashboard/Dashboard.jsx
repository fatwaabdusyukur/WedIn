import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
    const data = useLoaderData();
    const { username, role } = data;

    return <h1>Welcome { username }</h1>
}