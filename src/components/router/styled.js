import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-top: 3em;
    .nav-link {
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        line-height: 24px;
        padding-bottom: 6p;
        color: rgba(255, 255, 255, 0.5);
        border-bottom: none;
        text-decoration: none;
    }
    .nav-link-active {
        color: #ffffff;
        border-bottom: 3px solid #ffffff;
    }
`;
