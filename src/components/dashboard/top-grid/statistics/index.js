import React from 'react';
import { Label } from '../../../shared';
import graph from '../../../../assets/deals_graphic.png';
import { ItemWrapper, UsdIcon, Billions } from './styled';

export const Statistics = props => {
    return (
        <>
            <ItemWrapper>
                <Label>Earnings</Label>
                <div>
                    <UsdIcon className="material-icons">attach_money</UsdIcon>
                    <Billions>2289.32</Billions>
                </div>
                <div></div>
            </ItemWrapper>
            <ItemWrapper>
                <img src={graph} alt={graph} />
            </ItemWrapper>
        </>
    );
};
