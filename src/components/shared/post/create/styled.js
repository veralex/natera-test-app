import styled from 'styled-components';

export const CreateForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    width: 100%;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    color: ${props => props.theme.sectionLabel};
`;

export const CreateControl = styled.div`
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
