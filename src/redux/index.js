import { setArtist } from './artistSlice';
import { setArtistSong } from './artistSongSlice';
import { setSearch } from './searchSlice';
import { setSongs } from './songsSlice';
import { startLoading, stopLoading } from './loadingSlice';
import {
    setCurrentSong,
    setCurrentSongId,
    setCurrentArtist,
    setCurrentArtistId,
    setCurrentLyrics,
    setCurrentArt,
} from './currentSlice';

export {
    setArtistSong,
    setSearch,
    setArtist,
    setSongs,
    startLoading,
    stopLoading,
    setCurrentSong,
    setCurrentSongId,
    setCurrentArtist,
    setCurrentArtistId,
    setCurrentLyrics,
    setCurrentArt,
};
