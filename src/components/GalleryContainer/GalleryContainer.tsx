import React from 'react';
import { galleryApi } from '../../services/GalleryService';
import GridComponent from '../GridComponent/GridComponent';

interface BreedsContainerProps {
  limit: number;  
  selectedBreed: any;
  selectedOrder: string;
  selectedTypes: string;
}


const GalleryContainer:React.FC<BreedsContainerProps> = ({limit, selectedBreed, selectedOrder, selectedTypes}) => { 
    const {data: gallery, isLoading, error} = galleryApi.useFetchAllGalleryQuery({
      breed: selectedBreed,
      limit: limit,
      order: selectedOrder,
      mime_types: selectedTypes,
    })

   

    if(isLoading){
        return <div>loading</div>
    }

    const groupedImages = [];
    for (let i = 0; i < gallery.length; i += 5) {
      groupedImages.push(gallery.slice(i, i + 5));
    }

    console.log(groupedImages)

    return (
      <div>
      {groupedImages.map((imageGroup, groupIndex) => (
          <GridComponent key={groupIndex} images={imageGroup} />
        ))}
      </div>
    );
};

export default GalleryContainer;