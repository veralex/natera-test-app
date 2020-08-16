import React, { useContext, useState, useMemo } from 'react';
import { AppContext } from 'components/context';
import { Wrapper, Avatar, Body } from './styled';

export const Author = ({ post }) => {
    const { users } = useContext(AppContext);
    const user = useMemo(() => users.find(u => u.id === post.author_id), [
        users,
        post,
    ]);

    const [img, setImg] = useState(null);
    import(`assets/${user.image}`).then(res => setImg(res.default));

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
