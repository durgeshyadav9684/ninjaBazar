import Image from 'next/image';
import React from 'react';

const ImageComponent = ({ src, alt, width, height, className, divClassName }: any) => {
    return (
        <div className={divClassName}>
            <Image src={src} alt={alt} width={width} height={height} className={className} />
        </div>
    );
};

export default ImageComponent;
