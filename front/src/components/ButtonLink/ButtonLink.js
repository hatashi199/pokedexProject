import StyledButtonLink from './StyledButtonLink';

const ButtonLink = ({ white, children }) => {
    return <StyledButtonLink white={white}>{children}</StyledButtonLink>;
};

export default ButtonLink;
