import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`
const PriceContainer = styled.div``
const Price = styled.div``
const Type = styled.div``
const List = styled.div``
const ListItem = styled.div``




const PriceCard = () => {
    return (
        <Container>
            <PriceContainer>
                $<Price>20</Price>

                    <Type>  Plan </Type>

                        <List>
                            <ListItem>A</ListItem>
                            <ListItem>CD</ListItem>
                            <ListItem>ED</ListItem>
                        </List>
            </PriceContainer>
        </Container>
    );
}

export default PriceCard;
