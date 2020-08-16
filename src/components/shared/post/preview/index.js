import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Button } from '../../button';
import { Author, PostCreateForm } from '../';
import { HeaderContent } from './header-content';
import { NotPublishedChunk } from './not-published-chunk';
import { BodyPreview } from './body-preview';
import { AppContext } from '../../..';
import { ThemeProvider } from 'styled-components';
import { Wrapper, Icon, Label } from './styled';

import theme from '../../../../theme';

const PostComponent = ({ action, post, onClick }) => {
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

PostComponent.propTypes = {
    action: PropTypes.oneOf(['show', 'create', 'edit']),
    post: PropTypes.object,
};

PostComponent.defaultProps = {
    action: 'show',
};

const PostPreview = React.memo(PostComponent, (prevProps, nextProps) =>
    _.isEqual(prevProps, nextProps)
);

export { PostPreview };
