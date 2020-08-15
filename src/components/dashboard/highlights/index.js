import React, { useContext } from 'react';
import { AppContext } from '../..';
import {
    SectionHeader,
    PostPreview,
    GeneratePostShowComponent,
} from '../../shared';
import { GridWrapper, AnimatedTile } from './styled';

export const Highlights = React.memo(() => {
    const { posts, setModalOpen } = useContext(AppContext);
    return (
        <div>
            <SectionHeader>Highlights</SectionHeader>
            <GridWrapper>
                {posts
                    .filter(post => post.published)
                    .slice(-8)
                    .map(post => (
                        <AnimatedTile key={post.id}>
                            <PostPreview
                                post={post}
                                action="show"
                                onClick={e => {
                                    setModalOpen(true);
                                    GeneratePostShowComponent({
                                        post,
                                        close: () => setModalOpen(false),
                                    });
                                }}
                            />
                        </AnimatedTile>
                    ))}
            </GridWrapper>
        </div>
    );
});
