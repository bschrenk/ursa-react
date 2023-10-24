import React from 'react';
import styled from 'styled-components';

enum HeadingType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    Paragraph = "p",
}

interface StyledTypeProps {
    children: string
};

interface TypographyProps {
    type: HeadingType
    content: string
}

const StyledH1: React.FC<StyledTypeProps> = styled.h1`  
    font-size: ${(props) => props.theme.fonts.size.h1};
`;

const StyledH2: React.FC<StyledTypeProps> = styled.h2`  
    font-size: ${(props) => props.theme.fonts.size.h2};
`;

const StyledH3: React.FC<StyledTypeProps> = styled.h3`  
    font-size: ${(props) => props.theme.fonts.size.h3};
`;

const StyledH4: React.FC<StyledTypeProps> = styled.h4`  
    font-size: ${(props) => props.theme.fonts.size.h4};
`;

const StyledH5: React.FC<StyledTypeProps> = styled.h5`  
    font-size: ${(props) => props.theme.fonts.size.h5};
`;

const StyledH6: React.FC<StyledTypeProps> = styled.h6`  
    font-size: ${(props) => props.theme.fonts.size.h6};
`;

const StyledP: React.FC<StyledTypeProps> = styled.p`  
    font-size: ${(props) => props.theme.fonts.size.p};
`;

const determineTypography = (type: HeadingType, content: string) => {
    switch (type) {
        case HeadingType.H1:
            return <StyledH1>{content}</StyledH1>;
        case HeadingType.H2:
            return <StyledH2>{content}</StyledH2>;
        case HeadingType.H3:
            return <StyledH3>{content}</StyledH3>;
        case HeadingType.H4:
            return <StyledH4>{content}</StyledH4>;
        case HeadingType.H5:
            return <StyledH5>{content}</StyledH5>;
        case HeadingType.H6:
            return <StyledH6>{content}</StyledH6>;
        case HeadingType.Paragraph:
            return <StyledP>{content}</StyledP>;
    }
}

const Typography = ({
    type,
    content,
}: TypographyProps) => {
    return determineTypography(type, content);
}

Typography.defaultProps = {
};

export { Typography, TypographyProps,  HeadingType };