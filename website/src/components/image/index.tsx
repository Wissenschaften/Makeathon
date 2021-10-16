// React Components
import React from 'react';

// Utilities
import { useStyles } from './styles';
import ImageZoom from 'react-medium-image-zoom';

export interface FImageProps {
    alt?: string;
    zoom?: boolean;
    image?: string;
    className?: any;
}

const Image: React.FC<FImageProps> = (props) => {
    
    const classes = useStyles(props);

    const { zoom, image, className, alt = '' } = props;

    return (
        <>
            {
                zoom ? 
                    <ImageZoom
                        image={{
                            src: `${image}`,
                            alt: `${alt}`,
                            className: `${className}`,
                        }}
                        zoomImage={{
                            src: `${image}`,
                            alt: `${alt}`
                        }}
                    />    
                : <img src={image} alt={alt} className={className} />
            }
        </>
    )
};

export default Image;