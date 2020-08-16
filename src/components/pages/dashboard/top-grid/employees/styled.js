import styled from 'styled-components';
import { Icon as BaseIcon } from '../shared/styled';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1em;
`;

export const TopGrid = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
`;

export const Icon = styled(BaseIcon)`
    margin: 0 0.25em 0 -0.1em;
`;

// export const Column = styled.div`
//     width: 100%;
//     position: relative;
// `;

// export const Row = styled.div`
//     margin-top: 0.5em;
//     display: flex;
//     position: relative;
// `;

// export const Billions = styled.span`
//     font-family: Roboto;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 32px;
//     color: ${props => props.theme.inputText};
// `;

// export const UsdIcon = styled.i`
//     font-size: 37px;
//     color: ${props => props.theme.default};
//     /* A crutch to align the icon */
//     margin-left: -0.2em;
// `;

// export const Growth = styled.div`
//     span,
//     code {
//         font-size: 0.75em;
//         font-family: 'Roboto';
//         line-height: 0.75em;
//     }
//     span {
//         color: ${props => props.theme.label};
//     }
//     code {
//         color: ${props => props.theme.default};
//     }
// `;

// export const LinkRow = styled.div`
//     display: flex;
//     align-items: center;
//     position: absolute;
//     bottom: 0;
//     i {
//         color: ${props => props.theme.default};
//         font-size: 1.5em;
//     }
//     a,
//     i {
//         :hover {
//             cursor: pointer;
//         }
//     }
// `;

// // Here goes a link because wrapper doesn't require href prop
// export const Link = styled.a`
//     color: ${props => props.theme.default};
//     font-size: 14px;
//     font-family: Roboto;
//     letter-spacing: 0.1em;
//     text-decoration: none;
//     text-transform: uppercase;
// `;
