// React Components
import React from 'react';

// Material UI Components
import Box from '@material-ui/core/Box';

// Feward Components
import Link from 'components/link';
import Image from 'components/image';
import Divider from 'components/divider';
import Placement from 'components/placement';

// Utilities
import { useStyles } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export interface FHeaderProps {
    brand?: any;
    image?: string;
    color?: string;
    menuItems?: any;
    fixed?: boolean;
    background?: string;
}

const Header: React.FC<FHeaderProps> = (props) => {
    
    const classes = useStyles(props);

    const { menuItems, brand, fixed, color, image } = props;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed={fixed ? 'top' : undefined} className={classes.root} variant="dark">
                <Container>
                    <Navbar.Brand href="/" style={{color: color}} className={classes.brand}>{image ? <Image image={image} className={classes.image} /> : undefined}{brand ? brand : undefined}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Placement desktop={undefined} mobile={<Divider color={'#fff'} variant={'fullWidth'} light={true} margin={'13px 0px 10px 0px'} />} />
                        <Nav className="me-auto">
                            {menuItems.map((menuItem: any, key: number) => (
                                <Box key={`menuItem${key}`}>
                                    {menuItem.isDropdown ? 
                                        <NavDropdown 
                                            title={
                                                <span style={{color: color}}>{menuItem.item}</span>
                                            } 
                                            id={`menuItem${key}`} 
                                            style={{padding: '0px 10px 0px 0px'}}
                                        >
                                            {menuItem.dropdownItems.map((dropdownItem: any) => (
                                                <Link key={`dropdownItem${key}`} href={dropdownItem.href} className={classes.link} target={'_blank'}>{dropdownItem.item}</Link>
                                            ))}
                                        </NavDropdown>
                                    :
                                        <Link href={menuItem.href} className={classes.link} target={'_blank'}>{menuItem.item}</Link>
                                    }
                                </Box>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Header;