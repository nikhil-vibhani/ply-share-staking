import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Icon from '../../Components/Icon';

const ChoiceStaking = () => {
    return (<>
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={4} className="mb-4">
                    <Button variant="link" className="PR_StakingOn">
                        <div className="PR_StakingOnInner">
                            <div className="PR_StakingOnIcon">
                                <Icon name="ethereum" />
                            </div>
                            <div className="fs-xxl-20px fs-16px text-white ffTitle pt-3">Staking On</div>
                        </div>
                        <div className="fs-xxl-16px fs-14px text-white text-center PR_StakingOnName">Ethereum</div>
                    </Button>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Button variant="link" className="PR_StakingOn">
                        <div className="PR_StakingOnInner">
                            <div className="PR_StakingOnIcon">
                                <Icon name="polygon" />
                            </div>
                            <div className="fs-xxl-20px fs-16px text-white ffTitle pt-3">Staking On</div>
                        </div>
                        <div className="fs-xxl-16px fs-14px text-white text-center PR_StakingOnName">Polygon</div>
                    </Button>
                </Col>
            </Row>
        </Container>
    </>)
}
export default ChoiceStaking