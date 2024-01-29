import React, { useState } from 'react';
import './create.css';
import { savepost } from './handleapipostimage';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const userData = useSelector((state) => state.user.userData);
  const emailFromState = useSelector((state) => state.user.email);

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const base64Image = image.split(',')[1];
      const postData = {
        image: base64Image,
        caption,
      };

      console.log(postData);

      // Use emailFromState or userData.email instead of dummyemail
      const userpostResult = await savepost("aniket", base64Image, caption);
      console.log(userpostResult);
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  return (
    <div className='main-creat-post'>
      <div className='create-post'>
        <h1>Create Post</h1>

        <div className='add-create-post-input'>
          <label htmlFor='image'>Choose Image:</label>
          <input
            type='file'
            accept='image/*'
            id='image'
            name='image'
            onChange={handleImageChange}
          />

          {image && <img src={image} alt='Selected' style={{ maxWidth: '100%' }} />}

          <label htmlFor='caption'>Caption:</label>
          <textarea
            id='caption'
            name='caption'
            value={caption}
            onChange={handleCaptionChange}
            placeholder='Write a caption...'
          />

          <button onClick={handleSubmit}>Create Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;