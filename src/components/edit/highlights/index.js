import React, { useContext, useEffect } from 'react';
import { SectionHeader, Tile, PostPreview } from '../../shared';
import { Wrapper, GridWrapper } from './styled';
import { AppContext } from '../../';
import './index.css';

export const Highlights = () => {
    const { posts } = useContext(AppContext);
    const postsToShow = posts.slice(-11);

    const slide = postsToShow.length === 11 ? false : postsToShow.length % 4;
    useEffect(() => {
        // It's a specific way to slide a div. But I don't know how to
        // make it better
        const element = document
            .getElementsByClassName('create-post-slide')
            .item(0);
        if (element) {
            element.classList.remove('create-post-slide');
            void element.offsetWidth;
            element.classList.add('create-post-slide');
        }
    }, [slide]);

    return (
        <Wrapper>
            <SectionHeader>Highlights</SectionHeader>
            <GridWrapper>
                {posts.slice(-11).map(post => (
                    <Tile key={post.id}>
                        <PostPreview post={post} action="edit" />
                    </Tile>
                ))}
                <Tile className={slide ? 'create-post-slide' : null}>
                    <PostPreview action="create" />
                </Tile>
            </GridWrapper>
        </Wrapper>
    );
};
