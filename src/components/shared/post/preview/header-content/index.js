import React, { useContext } from 'react';
import { Wrapper } from './styled';
import { Button } from '../../..';
import { AppContext } from '../../../..';

export const HeaderContent = ({ post }) => {
    const { publishPost, unpublishPost, removePost } = useContext(AppContext);
    return (
        <Wrapper>
            {post.published ? (
                <Button
                    color="red"
                    variant="outlined"
                    size="small"
                    onClick={() => unpublishPost(post.id)}
                >
                    Unpublish
                </Button>
            ) : (
                <>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => publishPost(post.id)}
                    >
                        Publish
                    </Button>
                    <div style={{ width: '5%' }}></div>
                    <Button
                        color="red"
                        variant="outlined"
                        size="small"
                        onClick={() => removePost(post.id)}
                    >
                        Remove
                    </Button>
                </>
            )}
        </Wrapper>
    );
};
