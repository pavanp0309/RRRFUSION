import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

import SocialLogin from './SocialNetwork';
import '../../styles/Register.css';  



const SignUp = () => {
 

  const onFinish = async (values) => {
 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Row className="signup-container" justify="center" align="middle">
      <Col xs={24} md={20} lg={16} xl={12} className="form-col">
        <Row>
          <Col xs={24} md={12} className="welcome-section">
            <h2>Welcome!</h2>
            <p>
              If you already have an account with us, let's sign in to see something awesome!
            </p>
            <Button type="primary" className="existing-account-btn" >
              Use your existing account
            </Button>
          </Col>
          <Col xs={24} md={12} className="form-section">
            <h2>Create Account</h2>
            <SocialLogin />
            <p>or use your email for registration</p>
            <Form
              name="signup"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {/* Full Name field */}
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input placeholder="Full Name" />
              </Form.Item>

              {/* Email field */}
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              {/* Mobile Number field */}
              <Form.Item
                label="Mobile Number"
                name="mobileNumber"
                rules={[
                  { required: true, message: 'Please input your mobile number!' },
                  { pattern: /^[0-9]{10}$/, message: 'Mobile number must be 10 digits' }
                ]}
              >
                <Input placeholder="Mobile Number" />
              </Form.Item>

              {/* Password field */}
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              {/* Terms of Use */}
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                  },
                ]}
              >
                <Checkbox>
                  I agree to <a href="">Terms of Use</a> & <a href="">Privacy policy</a>
                </Checkbox>
              </Form.Item>

              {/* Sign Up Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="signup-btn">
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignUp;
