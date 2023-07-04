import React, { useEffect, useState } from 'react'
import Blog from "../../components/blog";


const BlogPage = () => {

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    return domLoaded ? <Blog /> : null;
};

export default BlogPage;
