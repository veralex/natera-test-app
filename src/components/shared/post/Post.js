import React, { useContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Modal } from '..';
import {
    PostFooterContent,
    PostHeaderContent,
    PostNotPublishedChunk,
    PostCreateForm,
    PostBodyPreview,
} from '.';
import { AppContext } from '../..';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: stretch;
    // align-items: stretch;
    height: 100%;
    & hr {
        width: 100%;
        margin: 0px;
        border: 1px solid ${props => props.theme.lightGray};
    }
    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .post-header {
        flex: 0 0 36px;
        height: 36px;
        padding: 0px 12px;
    }

    .post-body {
        flex: 1 0 0px;
        display: flex;
        flex-direction: column;
    }
    .post-footer-divider {
        width: 100%;
        padding: 0px 24px;
    }
    .post-footer {
        flex: 0 0 64px;
        padding: 0px 20px;
        height: 66px;
    }
    .create-post-button {
        margin 0px 16px
    }
`;

// const Wrapper = styled.div`
//     display: block;
//     height: 100%;
//     position: relative;
//     & hr {
//         width: 100%;
//         margin: 0px;
//         border: 1px solid ${props => props.theme.lightGray};
//     }
//     & > div {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .post-header {
//         height: 36px;
//         padding: 0px 12px;
//     }

//     .post-body {
//         flex-direction: column;
//         margin-bottom: 67px;
//     }
//     .post-footer-divider {
//         width: 100%;
//         padding: 0px 24px;
//         position: absolute;
//         bottom: 66px;
//     }
//     .post-footer {
//         padding: 0px 20px;
//         height: 66px;
//         position: absolute;
//         bottom: 0px
//     }
//     .create-post-button {
//         margin 0px 16px
//     }
// `;

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
    const { createPost, modalOpen, setModalOpen } = useContext(AppContext);

    return (
        <>
            <Wrapper>
                {action === 'edit' && (
                    <div className="post-header">
                        <PostHeaderContent post={post} />
                    </div>
                )}
                {action !== 'create' && (
                    // <div className="post-header-divider">
                    <hr />
                    // </div>
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
                    <div className="post-footer-divider">
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
                                }}
                            >
                                Create
                            </Button>
                            <Modal
                                open={modalOpen}
                                setOpen={setModalOpen}
                                title="New post"
                            >
                                <PostCreateForm
                                    createPost={createPost}
                                    cancel={() => setModalOpen(false)}
                                />
                            </Modal>
                        </>
                    ) : (
                        <PostFooterContent post={post} />
                    )}
                </div>
            </Wrapper>
        </>
    );
};

PostComponent.propTypes = {
    action: PropTypes.oneOf(['show', 'create', 'edit']),
    post: PropTypes.object,
};

PostComponent.defaultProps = {
    action: 'show',
};

const Post = React.memo(PostComponent, (prevProps, nextProps) =>
    _.isEqual(prevProps, nextProps)
);

export { Post };
