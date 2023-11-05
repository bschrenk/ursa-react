import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

enum LinkType {
    Regular = "a",
    Button = "button",
}

enum LinkDecorator {
    Underline = "underline",
    None = "none",
}

interface StyledLinkProps {
    children: ReactNode | string;
};

interface LinkProps {
    type: LinkType;
    href: string;
    decorator: LinkDecorator;
    content: ReactNode | string;
}

const StyledRegularLink: React.FC<StyledLinkProps & { href: string, decorator: LinkDecorator }> = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: ${(props) => props.decorator};
  cursor: pointer;
`;

const determineLink = (type: LinkType, href: string, content: ReactNode | string, decorator: LinkDecorator) => {
    switch (type) {
        case LinkType.Regular:
            return <StyledRegularLink decorator={decorator} href={href}>{content}</StyledRegularLink>;
        case LinkType.Button:
            return <StyledRegularLink decorator={decorator} href={href}><Button>{content}</Button></StyledRegularLink>;
    }
}

const Link = ({
    type,
    href,
    decorator,
    content,
}: LinkProps) => {
    return determineLink(type, href, content, decorator);
}

Link.defaultProps = {
    decorator: LinkDecorator.None
};

export { Link, LinkProps, LinkType, LinkDecorator };