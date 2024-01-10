import React, { useState } from 'react';
import axios from '../../../../api/axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTextChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await axios.post('/create-blog', formData);
      // Thực hiện các hành động sau khi đăng bài thành công, chẳng hạn chuyển hướng hoặc hiển thị thông báo
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Content:
          <ReactQuill 
            value={content} 
            onChange={handleTextChange} 
            modules={{ toolbar: [['bold', 'italic', 'underline', 'strike'], [{ 'align': [] }]] }} 
          />
        </label>

        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
