import React, { useState } from 'react';
import {
    TextInput,
    FileInput,
    Button,
    AutocompleteInput,
    Switch,
} from '../../';
import { ModalFooter, ModalContentWrapper } from '../styled';
import { CreateForm, Title, CreateControl } from './styled';

export const PostCreateForm = ({ createPost, cancel }) => {
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
        <ModalContentWrapper>
            <CreateForm
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
                    <Title>New post</Title>
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
                <ModalFooter>
                    <div>
                        <Switch
                            name="published"
                            label="Instant publish"
                            onChange={hadleInstantPublish}
                            value={post.published}
                        />
                    </div>
                    <CreateControl>
                        <span
                            className="cancel-post-create"
                            onClick={handleCancel}
                        >
                            Cancel
                        </span>
                        <span>or</span>
                        <Button size="large">Publish</Button>
                    </CreateControl>
                </ModalFooter>
            </CreateForm>
        </ModalContentWrapper>
    );
};
