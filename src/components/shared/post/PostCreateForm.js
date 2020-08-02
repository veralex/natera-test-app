import React, { useState } from 'react';
import styled from 'styled-components';
import {
    SectionHeader,
    TextInput,
    FileInput,
    Button,
    AutocompleteInput,
    Switch,
} from '..';

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    width: 100%;
    ${SectionHeader} {
        padding-left: 0px;
    }
`;

const Footer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PostCreateHeader = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: 24px;
    color: ${props => props.theme.sectionLabel};
`;

const PostCreateControl = styled.div`
    display: flex;
    align-items: baseline;
    & > span {
        margin-right: 12px;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: ${props => props.theme.sectionLabel};
    }
    .cancel-post-create {
        text-decoration-line: underline;
        text-transform: uppercase;
        &:hover {
            cursor: pointer;
        }
    }
`;

const PostCreateForm = ({ createPost, cancel }) => {
    const initialState = {
        title: '',
        body: '',
        author_id: '',
        author: null,
        image: null,
        file: '',
        published: false,
    };
    const [post, setPost] = useState(initialState);

    const handleChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const hadleFileUpload = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => setPost({ ...post, file, image: reader.result });
    };

    const handleSelectAuthor = value => {
        setPost({ ...post, author_id: value.name, author: value });
    };

    const handleCancel = () => {
        cancel();
        setPost(initialState);
    };

    const hadleInstantPublish = published => setPost({ ...post, published });

    return (
        // I used form here to make it look like a real app
        <Wrapper
            method="POST"
            onSubmit={e => {
                e.preventDefault();
                const { title, body, published, image } = post;
                createPost({
                    title,
                    body,
                    published,
                    image,
                    author_id: post.author.id,
                });
                handleCancel();
            }}
        >
            <div>
                <PostCreateHeader>New post</PostCreateHeader>
                <TextInput
                    label="Message"
                    name="title"
                    onChange={handleChange}
                    value={post.title}
                />
                <TextInput
                    name="body"
                    onChange={handleChange}
                    value={post.body}
                >
                    <textarea className="text-area-input" />
                </TextInput>
                <TextInput
                    label="Photo"
                    name="image"
                    onChange={hadleFileUpload}
                    value={post.file}
                >
                    <FileInput />
                </TextInput>
                <AutocompleteInput
                    name="author_id"
                    label="author"
                    source="users"
                    onChange={handleChange}
                    onSelect={handleSelectAuthor}
                    value={post.author_id}
                />
            </div>
            <Footer>
                <div>
                    <Switch
                        name="published"
                        label="Instant publish"
                        onChange={hadleInstantPublish}
                        value={post.published}
                    />
                </div>
                <PostCreateControl>
                    <span className="cancel-post-create" onClick={handleCancel}>
                        Cancel
                    </span>
                    <span>or</span>
                    <Button size="large">Publish</Button>
                </PostCreateControl>
            </Footer>
        </Wrapper>
    );
};

export { PostCreateForm };
