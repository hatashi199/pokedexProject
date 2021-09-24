import styled from 'styled-components';

const StyledButtonLink = styled.button`
    padding: 1rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: 1px;
    border: 0;

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
`;

export default StyledButtonLink;
