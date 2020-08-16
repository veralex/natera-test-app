import React, { useContext } from 'react';
import { Label } from '../../../shared';
import graph from '../../../../assets/deals_graphic.png';
import {
    Wrapper,
    Column,
    Row,
    UsdIcon,
    Billions,
    Growth,
    Link,
    LinkRow,
} from './styled';
import { AppContext } from '../../../context';

export const Statistics = () => {
    const { statistics } = useContext(AppContext);
    return (
        <Wrapper>
            <Column>
                <Label>Earnings</Label>
                <Row>
                    <UsdIcon className="material-icons">attach_money</UsdIcon>
                    <Billions>{statistics.earnings.revenue}</Billions>
                </Row>
                <Row>
                    <Growth>
                        <code>+{statistics.earnings.growth}%</code>
                        <span> since last year</span>
                    </Growth>
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
