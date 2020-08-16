import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from 'components/shared';
import { Author as PostAuthor, PostImage } from 'components/shared/post';
import { Title, Author, Text, Footer, BodyWrapper } from './styled';
import theme from 'components/../theme';

export const PostShow = ({ post, close }) => {
    const paragraphs = useMemo(() => post.body.split('\n'), [post]);
    return (
        <>
            {post.image && <PostImage post={post} showTitle={false} />}
            <BodyWrapper>
                <Title>{post.title}</Title>
                <Text maxHeight={post.image ? '5em' : '15em'}>
                    {paragraphs.map((p, i) => (
                        <div key={i}>
                            <p>{p}</p>
                            <br />
                        </div>
                    ))}
                </Text>
                <Author>
                    <PostAuthor post={post} />
                </Author>
            </BodyWrapper>
            <Footer>
                <Button size="large" onClick={close}>
                    Close
                </Button>
            </Footer>
        </>
    );
};

export const GeneratePostShowComponent = ({ post, close }) =>
    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <PostShow post={post} close={close} />
        </ThemeProvider>,
        document.getElementById('modal-content')
    );
