import React, { useContext } from 'react';
import { Label } from '../../../shared';
import graph from '../../../../assets/deals_graphic.png';
import { Wrapper, Column, Link, LinkRow } from './styled';
import { ColoredText, Row, BigText, Icon } from '../shared/styled';
import { AppContext } from '../../../context';

export const Statistics = () => {
    const { statistics } = useContext(AppContext);
    return (
        <Wrapper>
            <Column>
                <Label>Earnings</Label>
                <Row>
                    <Icon className="material-icons">attach_money</Icon>
                    <BigText>{statistics.earnings.revenue}</BigText>
                </Row>
                <Row>
                    <ColoredText>
                        <code>+{statistics.earnings.growth}%</code>
                        <span> since last year</span>
                    </ColoredText>
                </Row>
                <LinkRow>
                    <Link>All statistics </Link>
                    <i className="material-icons">arrow_forward</i>
                </LinkRow>
            </Column>
            <Column>
                <img src={graph} alt={graph} />
            </Column>
        </Wrapper>
    );
};
