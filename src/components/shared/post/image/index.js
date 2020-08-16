import React, { useState } from 'react';
import { ImageWrapper } from './styled';

export const PostImage = ({ post, showTitle = true }) => {
    const [img, setImg] = useState(
        post.image?.startsWith('data:image') ? post.image : null
    );
    if (post.image && !img)
        import(`assets/${post.image}`).then(res => setImg(res.default));
    return (
        img && (
            <ImageWrapper img={img}>
                {showTitle && <h3>{post.title}</h3>}
            </ImageWrapper>
        )
    );
};
