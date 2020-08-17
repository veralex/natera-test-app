import React from 'react';
import { ImageWrapper } from './styled';

export const PostImage = ({ post, showTitle = true }) => {
    let img;
    if (post.image) img = require(`assets/${post.image}`);

    return (
        img && (
            <ImageWrapper img={img}>
                {showTitle && <h3>{post.title}</h3>}
            </ImageWrapper>
        )
    );
};
