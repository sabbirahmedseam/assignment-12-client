import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Racing = () => {
    const categories=useLoaderData();
    
    return (
        <div>
            racing {categories.length}
        </div>
    );
};

export default Racing;