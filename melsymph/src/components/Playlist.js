import { PlaylistHeader } from './PlaylistHeader';
import SongList from './SongList';
import React from 'react';
import playlistData from '../assets/playlistData';
// import '../styles/playlist.scss';

// Component Playlist
const Playlist = ({ playlistId }) => {
  const selectedPlaylist = playlistData.find((playlist) => playlist.id === playlistId);
  return (
    <div className="playlist">
      <PlaylistHeader avatar={selectedPlaylist.avatar} name={selectedPlaylist.name} />
      <SongList songs={selectedPlaylist.songs} />
    </div>
  );
};

export default Playlist;