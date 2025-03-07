import React from 'react';
import AlbumItem from "../AlbumItem";


function AlbumList(props) {

    const {albumList} = props


    return (
        <>
            {albumList.map((item, index) => (
                <AlbumItem key={index} album={item} />
            ))}
        </>
    )
}

export default AlbumList;