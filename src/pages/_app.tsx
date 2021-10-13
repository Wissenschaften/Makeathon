import '../../styles/global.css';
import Header from 'components/header';
import type { AppProps } from 'next/app';
import { Container } from 'react-bootstrap';
import { menuItems } from 'components/data/static';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App: React.FC<AppProps> = (props) => {
    
    const { Component, pageProps } = props;

    return (
      <>
        <Header brand={'AIvengers'} menuItems={menuItems} fixed={true} color={'#fff'} background={'#3070b3'} />
        <Container style={{marginTop: 80, marginBottom: 80}}>
          <Component {...pageProps}/>
        </Container>
        {console.log('This website created using React, Next.js, TypeScript by AIvengers team')}
      </>
    )
};

export default App;