import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class Navbar extends Component{
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Meryl's portfolio" scroll>
            <Navigation>
                <a href="/">About</a>
                <a href="/">Resume</a>
                <a href="/">Work</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    )
  }
  
}
export default Navbar