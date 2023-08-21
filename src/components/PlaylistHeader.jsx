import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
// import avatarplaylist from '../assets/images/playlist1.jpg';
import getImage from '../utils/getImage';

const ImageGenerator = ({ imageName, className }) => {
  return (
    <img src={imageName} alt="Generated" className={className} />
  );
};

const PlaylistHeader = ({ avatar, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageData, setImageData] = useState('');

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imageData = await getImage(avatar); // Gọi hàm getImage để lấy dữ liệu hình ảnh từ máy chủ
        setImageData(imageData);
      } catch (error) {
        console.error('Err: ', error);
      }
    };

    fetchImageData();
  }, [avatar]);
  return (
    <div className="playlist-header">
      <div className="playlist-avatar">
        <ImageGenerator imageName={`data:image/jpeg;base64,${imageData}`} className="custom-image" />
        {/* <img src={avatarplaylist} alt="Playlist Avatar" /> */}
      </div>
      <div className="playlist-info">
        <h2 style={{ fontSize: '96px' }}>{name}</h2>
        <button className="play-button" onClick={handlePlayButtonClick}>
          {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export {
  PlaylistHeader,
  ImageGenerator
};