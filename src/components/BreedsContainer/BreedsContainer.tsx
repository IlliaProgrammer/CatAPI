import React from 'react';
import { IBreedProps } from '../../models/IBreed';
import { breedsApi } from '../../services/BreedsService';
import GridComponent from '../GridComponent/GridComponent';
import Loader from '../Loader/Loader';



const BreedsContainer: React.FC<IBreedProps> = ({ breed, limit, order }) => {
  const { data: images, isError: isImagesError, isLoading } = breedsApi.useFetchAllBreedsImagesQuery({
    breed: breed,
    limit: limit,
    order: order,
  });

  if (isImagesError) {
    return <div>Error loading images</div>;
  }

 
  if (!images) {
    return <Loader />;
  }


  const groupedImages = [];
  for (let i = 0; i < images.length; i += 5) {
    groupedImages.push(images.slice(i, i + 5));
  }


  return (
    <div>
        {groupedImages.map((imageGroup, groupIndex) => (
              <GridComponent key={groupIndex} images={imageGroup} />
        ))}
                
    </div>
  );
};

export default BreedsContainer;