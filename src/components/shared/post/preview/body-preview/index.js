import React, { useState } from 'react';
import { TextWrapper, ImageWrapper } from './styled';

export const BodyPreview = ({ post }) => {
    const [img, setImg] = useState(
        post.image?.startsWith('data:image') ? post.image : null
    );
    if (post.image && !img)
        // This is a crutch that loads an image both from local file and uploaded file
        import(`assets/${post.image}`).then(res => setImg(res.default));
    return post.image ? (
        img && (
            <ImageWrapper img={img}>
                <h3>{post.title}</h3>
            </ImageWrapper>
        )
    ) : (
        <TextWrapper>
            <h3>{post.title}</h3>
        </TextWrapper>
    );
};
