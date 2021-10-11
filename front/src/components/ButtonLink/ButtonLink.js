import StyledButtonLink from './StyledButtonLink';

const ButtonLink = ({ white, marTop, children }) => {
    return (
        <StyledButtonLink white={white} marTop={marTop}>
            {children}
        </StyledButtonLink>
    );
};

export default ButtonLink;
