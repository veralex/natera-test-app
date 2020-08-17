import React from 'react';
import { TextWrapper, ImageWrapper } from './styled';

export const BodyPreview = ({ post }) => {
    let img;
    if (post.image)
        img = post.image.startsWith('data:image')
            ? post.image
            : require(`assets/${post.image}`);

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
