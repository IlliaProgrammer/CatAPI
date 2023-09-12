import React, { useState } from 'react';
import styles from './GridComponent.module.css';
import { Link, useLocation } from 'react-router-dom';
import { BREEDS_ROUTE } from '../../utils/consts';
import { favoutiteApi } from '../../services/FavouriteService';


interface IGridPhoto {
  images: {
    breeds: any[];
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
}

const GridComponent: React.FC<IGridPhoto> = ({ images }) => {
  const location = useLocation();
  const isBreedsPage = location.pathname === BREEDS_ROUTE;

  const { data: favourites, isSuccess } = favoutiteApi.useFetchAllFavouritesQuery(""); 
  const [addFavourite] = favoutiteApi.useAddFavouriteMutation(); 
  const [removeFavourite] = favoutiteApi.useRemoveFavouriteMutation();
  
  

  const toggleFavorite = async (imageId: string) => {

    const isFavorited = favourites.some((favorite:any) => favorite.image_id === imageId);

    if (isFavorited) {
      await removeFavourite(imageId); 
    } else {
      await addFavourite({ image_id: imageId }); 
    }
  };

  return (
    <div className={styles.container}>
      {images.map((image, imageIndex) => (
        <div
          key={image.id}
          className={
            (imageIndex % 5 === 0) ? styles.first :
            (imageIndex % 5 === 1) ? styles.fifth :
            (imageIndex % 5 === 2) ? styles.second :
            (imageIndex % 5 === 3) ? styles.third :
            styles.fourth
          }
        >
          {
            isBreedsPage ? 
            <Link to={`/breed/${image.breeds[0]?.id}`}>
                <p className={styles.breed}>{image.breeds[0]?.name}</p>
                <img src={image.url} alt={`Image ${imageIndex}`} className={styles.image} />
            </Link> :
            <>
              <input
                type="checkbox"
                checked={isSuccess && favourites.some((favorite:any) => favorite.image_id === image.id)}
                onChange={() => toggleFavorite(image.id)}
              />
              <img src={image.url} alt={`Image ${imageIndex}`} className={styles.image} />
            </>
          }
        </div>
      ))}
    </div>
  );
};

export default GridComponent;