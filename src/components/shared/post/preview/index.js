import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { postType } from 'components/types';
import { Button } from 'components/shared';
import { Author, PostCreateForm } from 'components/shared/post';
import { HeaderContent } from './header-content';
import { NotPublishedChunk } from './not-published-chunk';
import { BodyPreview } from './body-preview';
import { AppContext } from 'components/context';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Icon, Label } from './styled';
import theme from 'components/../theme';

const PostPreview = ({ action = 'show', post, onClick }) => {
    const { createPost, setModalOpen, modalOpen } = useContext(AppContext);

    useEffect(() => {
        if (!modalOpen)
            ReactDOM.unmountComponentAtNode(
                document.getElementById('modal-content')
            );
    }, [modalOpen]);

    return (
        <Wrapper onClick={onClick}>
            {action === 'edit' && (
                <div className="post-header">
                    <HeaderContent post={post} />
                </div>
            )}
            {action === 'edit' && (
                <div className="post-divider header-divider">
                    <hr />
                </div>
            )}
            <div className="post-body">
                {action === 'create' ? (
                    <>
                        <Icon className="material-icons">
                            add_circle_outline
                        </Icon>
                        <Label>New post</Label>
                    </>
                ) : (
                    <BodyPreview post={post} />
                )}
            </div>
            {action === 'edit' && !post?.published ? (
                <NotPublishedChunk />
            ) : (
                <div className="post-divider footer-divider">
                    <hr />
                </div>
            )}

            <div className="post-footer">
                {action === 'create' ? (
                    <>
                        <Button
                            className="create-post-button"
                            onClick={() => {
                                setModalOpen(true);
                                ReactDOM.render(
                                    <ThemeProvider theme={theme}>
                                        <PostCreateForm
                                            createPost={createPost}
                                            cancel={() => setModalOpen(false)}
                                            theme={theme}
                                        />
                                    </ThemeProvider>,
                                    document.getElementById('modal-content')
                                );
                            }}
                        >
                            Create
                        </Button>
                    </>
                ) : (
                    <Author post={post} />
                )}
            </div>
        </Wrapper>
    );
};

PostPreview.propTypes = {
    action: PropTypes.oneOf(['show', 'create', 'edit']),
    post: postType,
    onClick: PropTypes.func,
};

const Memoized = React.memo(PostPreview);

export { Memoized as PostPreview };
