import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
//rfc
export default function ImageGallery({ images, onOpenModal }) {
  return (
    <div>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            id={id}
            src={webformatURL}
            srcLarge={largeImageURL}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
