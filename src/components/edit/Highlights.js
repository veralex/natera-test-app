import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { SectionHeader, Tile, Post } from '../shared';
import { AppContext } from '../';
import './post.css';

const Wrapper = styled.div`
    /* position: absolute; */
    width: 100%;
    top: 200px;
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-auto-rows: auto;
    overflow: hidden;
`;

const Highlights = props => {
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
        <>
            <Wrapper>
                <SectionHeader>Highlights</SectionHeader>
                <GridWrapper>
                    {posts.slice(-11).map(post => (
                        <Tile key={post.id}>
                            <Post post={post} action="edit" />
                        </Tile>
                    ))}
                    <Tile className={slide ? 'create-post-slide' : null}>
                        <Post action="create" />
                    </Tile>
                </GridWrapper>
            </Wrapper>
        </>
    );
};

export { Highlights };
