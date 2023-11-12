import React, { useEffect } from 'react';
import { galleryApi } from '../../services/GalleryService';
import GridComponent from '../GridComponent/GridComponent';
import Loader from '../Loader/Loader';

interface GalleryContainerProps {
  limit: number;
  selectedBreed: any;
  selectedOrder: string;
  selectedTypes: string;
  refetchProp: boolean; 
  setRefetchProp: any;
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({
  limit,
  selectedBreed,
  selectedOrder,
  selectedTypes,
  refetchProp,
  setRefetchProp,
}) => {
  const { data: gallery, isLoading, error, refetch: galleryRefetch } =
    galleryApi.useFetchAllGalleryQuery({
      breed: selectedBreed,
      limit: limit,
      order: selectedOrder,
      mime_types: selectedTypes,
    });

    useEffect(() => {
      const fetchData = async () => {
        await galleryRefetch();
        setRefetchProp(false);
      };
  
      if (refetchProp) {
        fetchData();
      }
    }, [refetchProp, galleryRefetch, setRefetchProp]);


  if (!gallery || !Array.isArray(gallery)) {
    return <Loader />;
  }

  const groupedImages = [];
  for (let i = 0; i < gallery.length; i += 5) {
    groupedImages.push(gallery.slice(i, i + 5));
  }

  return (
    <div>
      {groupedImages.map((imageGroup, groupIndex) => (
        <GridComponent key={groupIndex} images={imageGroup} />
      ))}
    </div>
  );
};

export default GalleryContainer;