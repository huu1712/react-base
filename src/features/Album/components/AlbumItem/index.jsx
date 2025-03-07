import React from 'react';

function AlbumItem(props) {

    const {album} = props

    return (
        <>
            <img src={album.thumbnail} alt={album.name} />
            <p>{album.name}</p>
        </>
    )
}

export default AlbumItem;