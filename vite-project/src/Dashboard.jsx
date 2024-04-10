import React, { useState } from 'react';
import { MantineProvider, AppShell,Input, Button, Grid, Card, Group, Text,Avatar, Flex } from '@mantine/core';
import image from './assets/img.jpg';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch,IconDots,IconSquareForbid2, IconLayoutDashboard,IconBook2,IconPlus ,IconUserQuestion,IconFileCheck,IconFolderCheck,IconArrowRight} from '@tabler/icons-react';

function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const [clickedButton, setClickedButton] = useState('Dashboard'); // Initialize with 'Dashboard'

  const handleButtonClick = (button) => {
    setClickedButton(button);
  };

  return (
    <MantineProvider>
      <AppShell
        withBorder={true}
        header={{ height: 64 }}
        navbar={{
          mt: 65,
          width: 250,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
          style: { border:'1px solid #BDD1D3' }
        }}
        padding="md"
      >
        <AppShell.Header>
          
          <div className='nav'>
        <img src={image} alt="not found"></img>
        <div className='mas'>
        <div className='req'>
        <Button variant={clickedButton === 'Request' ? "filled" : "outline"}  onClick={() => handleButtonClick('Request')}  leftSection={<IconPlus size={18}/>}  color="rgba(47, 143, 157, 1)">Request a Demo</Button>
        </div>
        <div className='avatar'>
        <Avatar variant="transparent" radius="xs" size="md" color="fff"  src="" />
        <Text>Name</Text>
        </div>
        </div>
      </div>
        </AppShell.Header>

        {/* <AppShell.Navbar p="md" >
          <AppShell.Section mt={10}>
            <Button
              justify='center'
              fullWidth
              variant={clickedButton === 'Dashboard' ? "filled" : "default"}
              onClick={() => handleButtonClick('Dashboard')}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400',height:'45px' }}
            >
              <IconLayoutDashboard/>
              Dashboard
            </Button>
          </AppShell.Section>
          <AppShell.Section mt={8}>
            <Button
              justify='center'
              fullWidth
              variant={clickedButton === 'Quotes' ? "filled" : "default"}
              onClick={() => handleButtonClick('Quotes')}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400',height:'45px' }}
            >
              <IconSquareForbid2/>
              Quotes
            </Button>
          </AppShell.Section>
          <AppShell.Section mt={8}>
            <Button
              justify='center'
              fullWidth
              variant={clickedButton === 'Bookings' ? "filled" : "default"}
              onClick={() => handleButtonClick('Bookings')}
              color="rgba(47, 143, 157, 1)"
              style={{ border: "none", fontWeight: '400',height:'45px' }}
            >
              <IconBook2/>
              Bookings
            </Button>
          </AppShell.Section>
        </AppShell.Navbar> */}
        <AppShell.Navbar p="md">
  <AppShell.Section mt={10}>
    <Button
      justify='center'
      fullWidth
      variant={clickedButton === 'Dashboard' ? "filled" : "default"}
      onClick={() => handleButtonClick('Dashboard')}
      color="rgba(47, 143, 157, 1)"
      style={{ border: "none", fontWeight: '400', height: '45px', display: 'flex', alignItems: 'center', padding: '0 25px' }}
    >
      <IconLayoutDashboard style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} /> Dashboard
    </Button>
  </AppShell.Section>
  <AppShell.Section mt={8}>
    <Button
      justify='center'
      fullWidth
      variant={clickedButton === 'Quotes' ? "filled" : "default"}
      onClick={() => handleButtonClick('Quotes')}
      color="rgba(47, 143, 157, 1)"
      style={{ border: "none", fontWeight: '400', height: '45px', display: 'flex', alignItems: 'center', padding: '0 25px' }}
    >
      <IconSquareForbid2 style={{ fontSize: '20px', marginRight: '10px', verticalAlign: 'middle' }} /> Quotes
    </Button>
  </AppShell.Section>
  <AppShell.Section mt={8}>
    <Button
      justify='center'
      fullWidth
      variant={clickedButton === 'Bookings' ? "filled" : "default"}
      onClick={() => handleButtonClick('Bookings')}
      color="rgba(47, 143, 157, 1)"
      style={{ border: "none", fontWeight: '400', height: '45px', display: 'flex', alignItems: 'center', padding: '0 25px' }}
    >
      <IconBook2 style={{ fontSize: '22px', marginRight: '10px', verticalAlign: 'middle' }} /> Bookings
    </Button>
  </AppShell.Section>
</AppShell.Navbar>



        <AppShell.Main>
          {clickedButton === 'Dashboard' && (
            <div className='grd' >
            
              <Grid>
      <Grid.Col span={2.75}><div className='box' style={{backgroundColor:'#FFFBE5'}}><div className='round'><IconUserQuestion/></div></div><Text size='sm' fw={500}>Enquires</Text><p>0</p></Grid.Col>
      <Grid.Col span={2.75}><div className='box' style={{backgroundColor:'#E6FEEA'}}><div className='round'><IconFileCheck/></div></div><Text size='sm' fw={500}>Approved Quotes</Text><p>0</p></Grid.Col>
      
      <Grid.Col span={2.75}><div className='box' style={{backgroundColor:'#E8E9FF'}}><div className='round'><IconFolderCheck/></div></div><Text size='sm' fw={500}>Active Bookings</Text><p>0</p></Grid.Col>
      <Grid.Col span={2.75}><div className='box' style={{backgroundColor:'#FFCDCD'}}><div className='round'><IconDots/></div></div><Text size='sm' fw={500}>Pending</Text><p>01 <IconArrowRight style={{marginLeft:'10px' }}/></p></Grid.Col>
    </Grid>
        
   
<div className='cards'>

<Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Quotes(0)</Text>
          
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">      
      </Text> 
    </Card>


<Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Bookings(0)</Text>
          
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">      
      </Text> 
    </Card>
</div>
            </div>
          )}
          {clickedButton === 'Quotes' && (
            // <div className='combo' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,marginTop:'8px'}}>
              <Flex
      gap="md"
      justify="flex-start"
      align="center"
      mt={8}
      
    >
            <IconSquareForbid2  style={{ marginRight: '10px',marginLeft:'20px' }} /> {/* Adjust margin as needed */}
            Quotes
            <Input
              size="md"
              style={{ borderColor: '1px solid #BDD1D3', marginLeft: '755px' }}
              placeholder="Search"
              rightSection={<IconSearch size={20} mr={10} style={{ marginRight: '10px', color: '#BDD1D3' }} />} // Adjust size and color as needed
            />
            </Flex>
          
          
          )}
          {clickedButton === 'Bookings' && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              Bookings Content
              
            </div>
          )}
         

          
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default Dashboard;
