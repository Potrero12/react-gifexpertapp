import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__lightSpeedInRight">{ category }</h3>

            {loading && <p className="animate__lightSpeedInRight">Loading</p>}

            <div className="card-grid animate__lightSpeedInRight">
                
                {
                    images.map( (img) => (
                        <GifGridItem key={img.id} {...img }/>
                    ))
                }
            </div>
        </>
    )
}
