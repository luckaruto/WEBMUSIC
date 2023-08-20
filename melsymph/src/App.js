import React from 'react';
import Playlist from './components/Playlist';
import './styles/playlist.scss';

// App component
const App = () => (
  <div className="app">
    <h1 style={{ marginLeft: '40px', fontSize: '48px' }}>My Playlist</h1>
    <Playlist playlistId={2} />
  </div>
);

export default App;
