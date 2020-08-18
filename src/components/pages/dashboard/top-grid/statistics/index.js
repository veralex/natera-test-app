import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/shared';
import chart from 'assets/deals_graphic.png';
import { ColumnWrapper, Column, Link, LinkRow, Wrapper, Chart } from './styled';
import { ColoredText, Row, BigText, Icon } from '../shared/styled';

const Statistics = ({ data }) => {
    return (
        <Wrapper>
            <ColumnWrapper>
                <Column>
                    <Label>Earnings</Label>
                    <Row>
                        <Icon className="material-icons">attach_money</Icon>
                        <BigText>{data.earnings.revenue}</BigText>
                    </Row>
                    <Row>
                        <ColoredText>
                            <code>+{data.earnings.growth}%</code>
                            <span> since last year</span>
                        </ColoredText>
                    </Row>
                </Column>
                <Column>
                    <Chart src={chart} alt={chart} />
                </Column>
            </ColumnWrapper>
            <LinkRow>
                <Link>All statistics </Link>
                <i className="material-icons">arrow_forward</i>
            </LinkRow>
        </Wrapper>
    );
};

Statistics.propTypes = {
    data: PropTypes.shape.isRequired,
};

const Memoized = React.memo(Statistics);

export { Memoized as Statistics };
