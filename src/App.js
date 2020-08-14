import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom'; 
import { Layout, Header, Navigation, Content, Footer, FooterLinkList } from 'react-mdl';
import './App.css';
import Main from './components/main.js';

class App extends Component {
    render() {
    return ( 
       <HashRouter>{/*koristi URL hash, i nije limitiran za pojedine pregledače i nije ograničen na single page aplikacije */}
           <div style={{height: '300px', position: 'relative'}}>
   <Layout fixedHeader>
       <Header className="header-color"title={<span><span style={{ color: '#ddd' }}>  </span><strong>Pavle V Portfolio</strong></span>}>
           <Navigation>
               <Link to="/">Home</Link> 
               <Link to="/projectphp">PHP Project</Link> 
               <Link to="/projectless/">Less Project</Link>   
               <Link to="/projectAndroid/">Android project</Link>  
               <Link to="/projectJava/">Java project</Link>  
           </Navigation>
           </Header>
       <Content> 
           <Main/>
        <Footer size="mini">
       <FooterLinkList>
       <Navigation>
               <Link to="/">Home</Link>  
               <Link to="/projectphp">PHP Project</Link> 
               <Link to="/projectless/">Less Project</Link>   
               <Link to="/projectAndroid/">Android project</Link>  
               <Link to="/projectJava/">Java project</Link>  
           </Navigation>
       </FooterLinkList>
       </Footer>   
       </Content>
   </Layout>
     </div>
       </HashRouter>
      );   
  } 
}
export default App;

