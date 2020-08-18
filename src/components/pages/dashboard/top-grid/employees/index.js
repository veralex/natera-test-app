import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TopGrid, Icon, Divider } from './styled';
import { Row, BigText, ColoredText } from '../shared/styled';
import { Label } from 'components/shared';
import { Chip } from './chip';

const Employees = ({ data }) => {
    const { employees, projects, specialization } = data;
    return (
        <Wrapper>
            <TopGrid>
                <div>
                    <Label>Employees</Label>
                    <Row>
                        <Icon className="material-icons" fontSize="1.75em">
                            supervised_user_circle
                        </Icon>
                        <BigText fontSize="1.5em">{employees.number}</BigText>
                    </Row>
                    <Row>
                        <ColoredText>
                            <span>{"You're in top"}</span>
                            <code> {employees.selection}%</code>
                        </ColoredText>
                    </Row>
                </div>
                <div>
                    <Label>Projects</Label>
                    <Row>
                        <Icon className="material-icons" fontSize="1.75em">
                            work
                        </Icon>
                        <BigText fontSize="1.5em">{projects.number}</BigText>
                    </Row>
                    <Row>
                        <ColoredText>
                            <code>{projects.this_month} </code>
                            <span>in this month</span>
                        </ColoredText>
                    </Row>
                </div>
            </TopGrid>
            <Divider>
                <hr />
            </Divider>
            <div>
                <Label>Top specialization</Label>
                {/* Let's pretend that a skillset is unique */}
                <Row>
                    {specialization.map(spec => (
                        <Chip key={spec}>{spec}</Chip>
                    ))}
                </Row>
            </div>
        </Wrapper>
    );
};

Employees.propTypes = {
    data: PropTypes.shape.isRequired,
};

const Memoized = React.memo(Employees);

export { Memoized as Employees };
