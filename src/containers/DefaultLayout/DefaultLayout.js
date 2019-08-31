import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import routes from '../../routes';
import "../../styles/blog-home.css";

//const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultMenu = React.lazy(() => import('./DefaultMenu'));
//const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
//const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  signOut(e) {
    e.preventDefault()
    //Call endpoint 
    this.props.history.push('/login')
  }

  loading = () => <div className="text-center"></div>

  render() {  

    return (      
      <> 
        <Suspense fallback={this.loading()}>
          <DefaultMenu/>
        </Suspense>            
        <Container className='blog_body'>
          <Suspense fallback={this.loading()}>
            <Switch>
              {routes.map((route, idx) => {
                console.log(route.component);
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
              {<Redirect from="/" to="/" />}
            </Switch>
          </Suspense>     
        </Container>     
    </>                           
    );
  }
}

export default DefaultLayout;

/*  
    

<main className="page-content">
          <div className="container-fluid">
            <Suspense fallback={this.loading()}>
              {/*<DefaultMenu  onLogout={e=>this.signOut(e)}></DefaultMenu> }
            </Suspense>  
            <div>            
              <div className="container-fluid shell-container">            
                <Suspense fallback={this.loading()}>                  
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>                
              </div>                           
              <br/>
              <br/>
            </div>
            <Suspense fallback={this.loading()}>
              {/*<DefaultFooter></DefaultFooter>}
            </Suspense>           
          </div>
        </main>

          <div className="container">
        
            <div className="row">
        

              <div className="col-md-8">
        
                <h1 className="my-4">Page Heading
                  <small>Secondary Text</small>
                </h1>
        

                <div className="card mb-4">
                  <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#/" className="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#/">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <div className="card mb-4">
                  <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#/" className="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#/">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <div className="card mb-4">
                  <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#/" className="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#/">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <ul className="pagination justify-content-center mb-4">
                  <li className="page-item">
                    <a className="page-link" href="#/">&larr; Older</a>
                  </li>
                  <li className="page-item disabled">
                    <a className="page-link" href="#/">Newer &rarr;</a>
                  </li>
                </ul>
        
              </div>
        
              
              <div className="col-md-4">
        

                <div className="card my-4">
                  <h5 className="card-header">Search</h5>
                  <div className="card-body">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for...">
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button">Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
        

                <div className="card my-4">
                  <h5 className="card-header">Categories</h5>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#/">Web Design</a>
                          </li>
                          <li>
                            <a href="#/">HTML</a>
                          </li>
                          <li>
                            <a href="#/">Freebies</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="#/">JavaScript</a>
                          </li>
                          <li>
                            <a href="#/">CSS</a>
                          </li>
                          <li>
                            <a href="#/">Tutorials</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
        
                
                <div className="card my-4">
                  <h5 className="card-header">Side Widget</h5>
                  <div className="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                  </div>
                </div>
        
              </div>
        
            </div>            
        
          </div>
                
</div>
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>            
     </footer>     */