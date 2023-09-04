import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PlayNow from '../components/PlayNow';
import Library from '../components/Library';

const View = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="flex h-full overflow-hidden">
      <div className=" flex flex-col ">
        <div className="px-6 h-screen overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <PlayNow />
            <Library />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"></div>
      )}
    </div>
  );
};

export default View;
