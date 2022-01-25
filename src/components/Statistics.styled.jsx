import styled from '@emotion/styled';

export const StatsTitle = styled.p`
    font-size: 30px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;

export const StatsItemWrapper = styled.ul`
   padding: 0;
`;

export const StatsItem = styled.li`
    list-style: none;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;

    &:not(:last-child) {
       margin-bottom: 6px;
    };
`;

export const Value = styled.span`
    font-weight: 700;
`;