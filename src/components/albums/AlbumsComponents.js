import React, {useEffect, useState} from 'react';
import {urlService} from "../../services/albums.service";
import AlbumComponent from "./AlbumComponent";

const AlbumsComponents = () => {

    const [albums, setAlbums] = useState([])

    useEffect(()=> {
        urlService.getAlbums().then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            {
                albums.map(value => <AlbumComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export default AlbumsComponents;