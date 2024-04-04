import React, { useState } from 'react';
import '@mantine/core/styles.css';
import './App.css';
import { IconArrowRight } from '@tabler/icons-react';
import { Input, MantineProvider, PasswordInput, Button, Anchor, Container, Center, Notification, rem } from '@mantine/core';
import image from './assets/img.jpg'
import { IconX, IconCheck } from '@tabler/icons-react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(null);

  const handleLogin = () => {
    if (username === '123' && password === '123') {
      setNotification(
        <Notification
          icon={<IconCheck />}
          color="teal"
          title="All good!"
          mt="md"
          onClose={() => setNotification(null)}
        >
          Everything is fine
        </Notification>
      );
      onLogin();
    } else {
      setNotification(
        <Center>
        <Notification
          icon={<IconX />}
          color="red"
          title="Bummer!"
          mt="md"
          onClose={() => setNotification(null)}
        >
          Invalid credentials. Please try again.
        </Notification>
        </Center>
      );
    }
  };

  const componentWidth = '300px';

  return (
    <MantineProvider>
      <div className='nav'>
        <img src={image} alt="not found"></img>
      </div>
      
      <div className="component-wrapper">
        <Center>
          <p style={{ color: "rgba(47, 143, 157, 1)" }}>Login in to Pentagon</p>
        </Center>
        <Center>
          <p>Enter Your Credentials</p>
        </Center>
        <Center>
          <Input
            size="md"
            style={{ width: componentWidth }}
            placeholder="Mobile number or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
          <PasswordInput
            size="md"
            style={{ width: componentWidth }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
          <Button
            onClick={handleLogin}
            fullWidth
            variant="filled"
            rightSection={<IconArrowRight size={14} />}
            color="rgba(47, 143, 157, 1)"
            size="md"
            style={{ width: componentWidth }}
          >
            Proceed
          </Button>
        </Center>
      </div>
      <div className="component-wrapper">
        <Center>
          <Anchor
            href="https://mantine.dev/"
            target="_blank"
            style={{ color: "rgba(47, 143, 157, 1)" }}
          >
            Forgot Password?
          </Anchor>
        </Center>
      </div>
      
      {/* Render the notification */}
      {notification}
    </MantineProvider>
  );
};

export default LoginForm;
