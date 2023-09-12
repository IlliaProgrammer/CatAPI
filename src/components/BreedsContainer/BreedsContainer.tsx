import React from 'react';
import { breedsApi } from '../../services/BreedsService';
import GridComponent from '../GridComponent/GridComponent';

interface BreedsContainerProps {
  limit: number;  
  selectedBreed: number | string;
  }


const BreedsContainer:React.FC<BreedsContainerProps> = ({ selectedBreed, limit }) => {
  

  const { data: images, isError: isImagesError, isLoading } = breedsApi.useFetchAllBreedsImagesQuery({
    breed: selectedBreed,
    limit: limit
  });

  if (isImagesError) {
    return <div>Error loading images</div>;
  }

  if (isLoading) {
    return <div>Loading images...</div>;
  }


  const groupedImages = [];
  for (let i = 0; i < images.length; i += 5) {
    groupedImages.push(images.slice(i, i + 5));
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

export default BreedsContainer;