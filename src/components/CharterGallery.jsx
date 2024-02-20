import React from 'react';
import Lightbox from 'react-image-lightbox';
import pont from "../assets/images/pont.jpg"
import famille from "../assets/images/famille.jpg"
import avant from "../assets/images/vueAvant.jpg"
import cockpit from "../assets/images/cockpit.jpg"

const [isOpen, setIsOpen] = useState(false);
const [photoIndex, setPhotoIndex] = useState(0);
const images = ['../assets/images/cabineDouble.jpg', 'url2.jpg', 'url3.jpg'];

const CharterGallery = () => {
    return (
        <>
        <img src={pont} />
        <img src={famille} />
        <img src={avant} />
        <img src={cockpit} />
        </>
    );
};

export default CharterGallery;