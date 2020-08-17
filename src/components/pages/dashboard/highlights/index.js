import React, { useContext } from 'react';
import { AppContext } from 'components/context';
import { SectionHeader } from 'components/shared';
import { PostPreview, GeneratePostShowComponent } from 'components/shared/post';
import { Grid, AnimatedTile } from './styled';

export const Highlights = React.memo(() => {
    const { posts, setModalOpen } = useContext(AppContext);
    return (
        <div>
            <SectionHeader>Highlights</SectionHeader>
            <Grid>
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
            </Grid>
        </div>
    );
});