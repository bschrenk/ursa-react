import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

enum LinkType {
    Regular = "a",
    Button = "button",
}

interface StyledLinkProps {
    children: ReactNode | string;
};

interface LinkProps {
    type: LinkType;
    href: string;
    content: ReactNode | string;
}

const StyledRegularLink: React.FC<StyledLinkProps & { href: string }> = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
`;

const determineLink = (type: LinkType, href: string, content: ReactNode | string) => {
    switch (type) {
        case LinkType.Regular:
            return <StyledRegularLink href={href}>{content}</StyledRegularLink>;
        case LinkType.Button:
            return <StyledRegularLink href={href}><Button>{content}</Button></StyledRegularLink>;
    }
}

const Link = ({
    type,
    href,
    content,
}: LinkProps) => {
    return determineLink(type, href, content);
}

Link.defaultProps = {
};

export { Link, LinkProps, LinkType };