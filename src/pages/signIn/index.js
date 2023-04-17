import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/img/logo.png";
import { containerStyle, logoStyle } from "./styles";
import { signInStart } from "../../modules/user/userSlice";

function SignIn() {
  const dispatch = useDispatch();
  const userGlobalState = useSelector((state) => state.user);

  const handleSignIn = () => {
    dispatch(signInStart());
  };

  return (
    <Row gutter={24} style={containerStyle}>
      <Col xs={24}>
        <Row justify="center" align="middle">
          <Col xs={24} sm={18} md={12}>
            <Card>
              <Row justify={"center"} align={"middle"}>
                <img src={logo} alt="logo" style={logoStyle} />
              </Row>
            </Card>
          </Col>
        </Row>

        <Row justify="center" align="middle">
          <Col xs={24} sm={18} md={12}>
            <Card title="Sign In" bordered={false}>
              <Row gutter={[24, 24]}>
                <Col xs={24}>
                  <Input placeholder="Username" prefix={<UserOutlined />} />
                </Col>
                <Col xs={24}>
                  <Input placeholder="Password" prefix={<LockOutlined />} />
                </Col>
                <Col xs={24}>
                  <Button
                    type="primary"
                    onClick={handleSignIn}
                    loading={userGlobalState.loading}
                    disabled={userGlobalState.loading}
                  >
                    Click here to log in
                  </Button>
                </Col>

                <Col xs={24}>
                  <Row>
                    <Col xs={12}>
                      <Button type="link">Forgot password</Button>
                    </Col>
                    <Col xs={12}>
                      <Row justify="end">
                        <Button type="link">Sign up</Button>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SignIn;
