import React, { useState } from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    padding: 8px 16px 8px 30px;
    h3 {
        font-family: Roboto;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${props => props.theme.inputText};
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: top center;
    background-size: cover;
    img {
        max-width: 100%;
    }
    h3 {
        position: absolute;
        left: 24px;
        bottom: 16px;
        color: ${props => props.theme.text};
    }
`;

const PostBodyPreview = ({ post }) => {
    const [img, setImg] = useState(
        post.image?.startsWith('data:image') ? post.image : null
    );
    if (post.image && !img)
        // This is a crutch that loads an image both from local file and uploaded file
        import(`../../../assets/${post.image}`).then(res =>
            setImg(res.default)
        );
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
export { PostBodyPreview };
