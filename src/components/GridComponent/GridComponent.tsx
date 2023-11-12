import React, { useState } from 'react';
import styles from './GridComponent.module.css';
import { Link, useLocation } from 'react-router-dom';
import { BREEDS_ROUTE } from '../../utils/consts';
import { favoutiteApi } from '../../services/FavouriteService';
import { Ifav } from '../../models/IFavoutite';


interface IGridPhoto {
  images: any[];
} 

const GridComponent: React.FC<IGridPhoto> = ({ images }) => {
  const location = useLocation();
  const isBreedsPage = location.pathname === BREEDS_ROUTE;

  const { data: favourites, isSuccess } = favoutiteApi.useFetchAllFavouritesQuery(""); 
  const [addFavourite] = favoutiteApi.useAddFavouriteMutation(); 
  const [removeFavourite] = favoutiteApi.useRemoveFavouriteMutation();

  const toggleFavorite = async (imageId: string) => {
    const isFavorited = favourites?.some((favorite: Ifav) => favorite.image_id === imageId);
    
    if (isFavorited) {
      const favoriteToRemove = favourites?.find((favorite: Ifav) => favorite.image_id === imageId);
      if (favoriteToRemove) {
        await removeFavourite(favoriteToRemove.id);
      } else {
        console.error("Favorite to remove not found");
      }
    } else {
      await addFavourite(imageId);
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
            <Link to={`/breed/${image.breeds[0]?.id}`} className={styles.imageContainer}>
                <p className={styles.breed}>{image.breeds[0]?.name}</p>
                <img src={image.url} alt={`Image ${imageIndex}`} className={styles.image} />
            </Link> :
           <span className={styles.imageContainer}>
            <label>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isSuccess && favourites.some((favorite: any) => favorite.image_id === image.id)}
                    onChange={() => toggleFavorite(image.id)}
                />
                <img src={image.url} alt={`Image ${imageIndex}`} className={styles.image} loading="lazy"/>
            </label>
           </span>
          }
        </div>
      ))}
    </div>
  );
};

export default GridComponent;