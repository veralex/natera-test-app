import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../AppContext';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4,
    span {
        margin: 0px 0px 0px 12px;
        font-style: normal;
        font-weight: 500;
    }
    h4 {
        color: ${props => props.theme.black};
        line-height: 16px;
        font-size: 14px;
    }
    span {
        color: ${props => props.theme.gray};
        font-size: 11px;
        line-height: 12px;
        letter-spacing: 0.01em;
    }
`;

const PostFooterContent = ({ post }) => {
    const { users } = useContext(AppContext);
    const user = users.find(u => u.id === post.author_id);

    const [img, setImg] = useState(null);
    import(`../../../assets/${user.image}`).then(res => setImg(res.default));

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

export { PostFooterContent };
