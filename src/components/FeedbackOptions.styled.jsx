import styled from '@emotion/styled';

export const FeedbackButtons = styled.button`
    border: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 8px;

    &:not(:last-child) {
        margin-right: 4px;
    };

    &:hover,
    &:focus {
       background-color: #aad3ee;
       color: white;
       border: none;
    };
`;