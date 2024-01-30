import React, { useState, useEffect } from 'react';
import { FaUser, FaPlus, FaThumbsUp } from 'react-icons/fa';
import './firstpage.css';
import image1 from './image1.jpeg';
import { getposts } from '../Api/getpostsapi';

const FirstPage = () => {
    const timesToRender = 5;
    const contentArray = Array.from({ length: timesToRender });

    const [postCollections, setPostCollection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataFromApi = await getposts();
                setPostCollection(dataFromApi);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures that useEffect runs once when the component mounts

    return (
        <div className='main-postx'>
            {contentArray.map((_, index) => (
                <div key={index} className='main-post-datax'>
                    <div className='main-namex'>
                        <div className='profile-info'>
                            <h3><FaUser/> Aniket Kadam</h3>
                        </div>
                        <button><FaPlus /> Connect</button>
                    </div>
                    <div className='main-post'>
                        <div className='main-post-image'>
                            <img src={image1} alt="Description" /> {/* Replace with actual image data */}
                        </div>
                    </div>
                    <div className='main-likes'>
                        <button><FaThumbsUp /> Like</button>
                    </div>    
                </div>
            ))}
        </div>
    );
}

export default FirstPage;
