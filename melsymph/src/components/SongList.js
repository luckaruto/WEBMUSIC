import React, { useState, useEffect } from 'react';
import getImage from '../utils/getImage';
import { ImageGenerator } from './PlaylistHeader';

// Component SongList
const SongList = ({ songs }) => {
  // const [selectedSong, setSelectedSong] = useState('');
  const [avatarData, setAvatarData] = useState({});

  const handleSongClick = (song) => {
    // setSelectedSong(song);
    console.log(song);
  };

  useEffect(() => {
    const fetchAvatars = async () => {
      const avatars = {};
      for (const song of songs) {
        try {
          const imageData = await getImage(song.avatar); // Fetch the avatar image
          avatars[song.id] = imageData; // Store the image data in the state
          // console.log('Current temp avatar data:', avatars);
        } catch (error) {
          console.error('Error fetching avatar:', error);
        }
      }
      setAvatarData(avatars);
    };

    fetchAvatars();
  }, [songs]);

  // console.log('Current avatar data:', avatarData);
  return (
    <div className="song-list">
      <div className="song-list-header">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Duration</span>
      </div>
      <div className="song-list-items-container"> 
        <ul className="song-list-items">
          {songs.map((song, index) => (
            <li key={song.id} onClick={() => handleSongClick(song)}>
              <span>{index + 1}</span>
              <span className="song-details">
                <ImageGenerator imageName={`data:image/jpeg;base64,${avatarData[song.id]}`} className="song-avatar" />
                <div className="title-artist">
                  <div className="title">{song.title}</div>
                  <div className="artist">{song.artist}</div>
                </div>
              </span>
              <span>{song.album}</span>
              <span>{song.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
