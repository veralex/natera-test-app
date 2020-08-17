import React, { useContext, useMemo } from 'react';
import { AppContext } from 'components/context';
import { Wrapper, Avatar, Body } from './styled';

export const Author = ({ post }) => {
    const { users } = useContext(AppContext);
    const user = useMemo(() => users.find(u => u.id === post.author_id), [
        users,
        post,
    ]);

    let img;
    if (post.image) img = require(`assets/${user.image}`);

    return (
        <Wrapper>
            {img && <Avatar src={img} alt={img} />}
            <Body>
                <h4>{user.name}</h4>
                <span>{user.title}</span>
            </Body>
        </Wrapper>
    );
};
