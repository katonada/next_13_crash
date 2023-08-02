'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import loadingPage from './loading';
import Courses from './components/Courses';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('/api/courses');
            const data = await res.json();

            setCourses(data);
            setLoading(false);
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <loadingPage/>;
    }

    return (
        <div>
            <h1>Wellcome to 600Code</h1>
            <CourseSearch getSearchResults={(results) => setCourses(results)} />
            <Courses courses={courses}/>
        </div>
    );
};

export default HomePage;
