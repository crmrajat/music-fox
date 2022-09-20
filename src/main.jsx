import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import {
    ArtistProfile,
    Dashboard,
    ItemNotFound,
    Loading,
    Search,
    SongItem,
    SongList,
    SongProfile,
} from './components';
import './index.css';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />}>
                    <Route path="" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Search" element={<Search />} />
                    <Route path="SongItem" element={<SongItem />} />
                    <Route path="SongList" element={<SongList />} />
                    <Route path="ItemNotFound" element={<ItemNotFound />} />
                    <Route path="Loading" element={<Loading />} />
                    <Route path="SongProfile" element={<SongProfile />} />
                    <Route path="ArtistProfile" element={<ArtistProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    //</React.StrictMode>
);
