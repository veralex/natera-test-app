import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '..';
import {
    PostFooterContent,
    PostHeaderContent,
    PostNotPublishedChunk,
    PostCreateForm,
    PostBodyPreview,
} from '.';
import { AppContext } from '../..';
import { ThemeProvider } from 'styled-components';

import theme from '../../../theme';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    & hr {
        width: 100%;
        border: 1px solid ${props => props.theme.lightGray};
        z-index: 1;
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .post-header {
        flex: 0 0 36px;
        padding: 0px 12px;
    }
    .post-divider {
        position: absolute;
        width: 100%;
        height: 1px;
    }
    .header-divider {
        top: 36px;
    }
    .footer-divider {
        bottom: 56px;
        padding: 0px 24px;
    }

    .post-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .post-footer {
        flex: 0 0 56px;
        padding: 0px 20px;
    }
    .create-post-button {
        margin: 0px 16px;
    }
`;

const PostIcon = styled.div`
    color: #dadada;
    font-size: 42px;
`;

const PostLabel = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${props => props.theme.default};

    margin: 8px 0px 0px;
`;

const PostComponent = ({ action, post }) => {
    const { createPost, setModalOpen } = useContext(AppContext);

    return (
        <Wrapper>
            {action === 'edit' && (
                <div className="post-header">
                    <PostHeaderContent post={post} />
                </div>
            )}
            {action !== 'create' && (
                <div className="post-divider header-divider">
                    <hr />
                </div>
            )}
            <div className="post-body">
                {action === 'create' ? (
                    <>
                        <PostIcon className="material-icons">
                            add_circle_outline
                        </PostIcon>
                        <PostLabel>New post</PostLabel>
                    </>
                ) : (
                    <PostBodyPreview post={post} />
                )}
            </div>
            {action === 'edit' && !post?.published ? (
                <PostNotPublishedChunk />
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
                                            cancel={() => {
                                                setModalOpen(false);
                                                ReactDOM.unmountComponentAtNode(
                                                    document.getElementById(
                                                        'modal-content'
                                                    )
                                                );
                                            }}
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
                    <PostFooterContent post={post} />
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

const PostTile = React.memo(PostComponent, (prevProps, nextProps) =>
    _.isEqual(prevProps, nextProps)
);

export { PostTile };
