import styled from 'styled-components';

const StyledButtonLink = styled.button`
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 1px;
    border: 0;
    cursor: pointer;

    & > a {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
        gap: 1rem;
    }

    ${(props) =>
        props.white &&
        `
        & {
            background: var(--color-white);
            color: var(--color-red);

            a {
                color: var(--color-red);
            }
        }`}

    ${(props) =>
        props.marTop &&
        `
        & {
            margin-top: 2.5rem;
        }
    `}
`;

export default StyledButtonLink;
