import React from 'react';
import styled from 'styled-components';
import { Label } from '../shared';
import graph from '../../assets/deals_graphic.png';

const Item = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    flex: 1;
`;

const BillionsAndBillionsAndBillions = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    color: #484848;
`;

const UsdIcon = styled.span`
    font-size: 37px;
    color: ${props => props.theme.default};
`;

const Statistics = props => {
    return (
        <>
            <Item>
                <Label>Earnings</Label>
                <div>
                    <UsdIcon className="material-icons">attach_money</UsdIcon>
                    <BillionsAndBillionsAndBillions>
                        2289.32
                    </BillionsAndBillionsAndBillions>
                </div>
                <div></div>
            </Item>
            <Item>
                <img src={graph} alt={graph} />
            </Item>
        </>
    );
};

export default Statistics;
