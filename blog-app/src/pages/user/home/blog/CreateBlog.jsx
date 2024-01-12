import React, { useEffect, useState } from 'react';
import UserNavbar from '../../../../components/UserNavbar';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const parseUser = storedUser ? JSON.parse(storedUser) : null;

    if (!storedUser) {
      setShowLoginModal(true);
    }

    setUser(parseUser);
  }, []);

  const handleModalClose = () => {
    setShowLoginModal(false);
    navigate('/login');
  };

  return (
    <div>
      <UserNavbar user={user} />
      <div className="container mx-auto my-8">
        <div className="max-w-2xl mx-auto">
          <label className="block text-lg font-semibold mb-2">
            Blog Content
          </label>
          <ReactQuill
            modules={{ toolbar: [['bold', 'italic', 'underline', 'link']] }}
            placeholder="Write your blog here..."
          />
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-2xl font-bold mb-4">Login Required</p>
            <p className="text-gray-700">
              You need to log in to access the website. Please log in or create
              an account.
            </p>
            <div className="flex justify-end">
              <button
                className="mt-4 bg-amber-400 px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm hover:bg-amber-300"
                onClick={handleModalClose}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
