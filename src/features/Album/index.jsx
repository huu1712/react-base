import React from 'react';
import AlbumList from "./components/AlbumList";

function Album() {

    const albumList = [
        {
            id: 1,
            name: "Bai so 1",
            thumbnail: "https://fastly.picsum.photos/id/109/200/200.jpg?hmac=vqAWt9QCvOo67gp7N7_-QeMlU5k0G47VIWM_B8Js-ww"
        },
        {
            id: 2,
            name: 'Bai so 2',
            thumbnail: "https://fastly.picsum.photos/id/106/200/200.jpg?hmac=buP7QPRJ18uSC5niV6HaCXgnkrp01jx5H_5w_3CUx9c"
        },
        {
            id: 3,
            name: 'Bai so 3',
            thumbnail: "https://fastly.picsum.photos/id/243/200/200.jpg?hmac=fW5ZwzzyTBy2t2MROp988oq12mZnKwN0coFLhZEE87s"
        },
        {
            id: 4,
            name: 'Bai so 4',
            thumbnail: "https://fastly.picsum.photos/id/290/200/200.jpg?hmac=-TTlqENxUe4ZacR5I1zAWsw9xtd-MOFEPRWogmAIKsw"
        }
    ]


    return (
        <>
            <AlbumList albumList={albumList}></AlbumList>
        </>
    )
}

export default Album;