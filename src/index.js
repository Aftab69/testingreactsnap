import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Categoryvideos from './Categoryvideos';

const musicVideos = [
    'https://youtu.be/-bpQpsO7mWs',
    'https://youtu.be/POuwAy2JTLk',
    'https://youtu.be/iDy4xBHq2C4',
    'https://youtu.be/h_62Ocagwtc',
    'https://youtu.be/Du-zBAUasJc',
    'https://youtu.be/NsxCsKlbkZE'
]
const adFilms = [
    'https://youtu.be/qWxFXk5CWJQ',
    'https://youtu.be/BBItkycabOM',
    'https://youtu.be/7Wpuc5J3GjQ',
    'https://youtu.be/R8GBM5hsvik',
    'https://youtu.be/LQ-KFYaVZ20'
]
const fashionFilms = [
    'https://youtu.be/s2xr1_Pr_6U'
]
const shortFilms = [
    'https://youtu.be/IASy9tKBzlw',
    'https://youtu.be/_yQ1rMLRpGk',
    'https://youtu.be/6J1WnGOqZdc',
    'https://youtu.be/mxxpgQ25mig',
    'https://youtu.be/CVd4SyXQUgc'
]
const behindTheScenes = [
    'https://youtu.be/0bqRgquI-0g',
    'https://youtu.be/H2UnUAGWGak',
    'https://youtu.be/geUDPq9YGNM',
    'https://youtu.be/uo7p2hy-MU8',
    'https://youtu.be/5tRULFPSVBo',
    'https://youtu.be/bcSEZ-5vUk8',
    'https://youtu.be/4wYIsgjaCIA'
]
const pageheading1 = "MUSIC VIDEOS"
const pageheading2 = "AD FILMS"
const pageheading3 = "FASHION FILMS"
const pageheading4 = "SHORT / DOCUMENTARY / TRAVEL FILMS"
const pageheading5 = "BEHIND THE SCENES"

const APP = (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/musicvideos' element={<Categoryvideos data={musicVideos} pageheading={pageheading1} />}/>
            <Route exact path='/adfilms' element={<Categoryvideos data={adFilms} pageheading={pageheading2} />}/>
            <Route exact path='/fashionfilms' element={<Categoryvideos data={fashionFilms} pageheading={pageheading3} />}/>
            <Route exact path='/shortdocumentarytravelfilms' element={<Categoryvideos data={shortFilms} pageheading={pageheading4} />}/>
            <Route exact path='/behindthescenes' element={<Categoryvideos data={behindTheScenes} pageheading={pageheading5} />}/>
        </Routes>
    </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}