import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'components/context';
import { SectionHeader } from 'components/shared';
import { PostPreview, GeneratePostShowComponent } from 'components/shared/post';
import { Grid, AnimatedTile } from './styled';

const Highlights = ({ data }) => {
    const { setModalOpen } = useContext(AppContext);
    return (
        <div>
            <SectionHeader>Highlights</SectionHeader>
            <Grid>
                {data
                    .filter(post => post.published)
                    .slice(-8)
                    .map(post => (
                        <AnimatedTile key={post.id}>
                            <PostPreview
                                post={post}
                                action="show"
                                onClick={() => {
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
};

Highlights.propTypes = {
    data: PropTypes.array,
};
const Memoized = React.memo(Highlights);

export { Memoized as Highlights };
