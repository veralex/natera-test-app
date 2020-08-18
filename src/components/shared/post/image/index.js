import React from 'react';
import PropTypes from 'prop-types';
import { postType } from 'components/types';
import { ImageWrapper } from './styled';

const PostImage = ({ post, showTitle = true }) => {
    let img;
    if (post.image)
        img = post.image.startsWith('data:image')
            ? post.image
            : require(`assets/${post.image}`);

    return (
        img && (
            <ImageWrapper img={img}>
                {showTitle && <h3>{post.title}</h3>}
            </ImageWrapper>
        )
    );
};

PostImage.propTypes = {
    post: postType.isRequired,
    showTitle: PropTypes.bool.isRequired,
};

const Memoized = React.memo(PostImage);

export { Memoized as PostImage };
