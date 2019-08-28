import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardFooter } from 'reactstrap';
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
    const { menuState } = this.props;

    return (      
      <> 
        <Suspense fallback={this.loading()}>
          <DefaultMenu/>
        </Suspense>    
        <Container>
            <Row>
                <Col md='8'>                
                    <h1 className="my-4">Page Heading
                        <small>Secondary Text</small>
                    </h1>
                    <Card className="mb-4">
                        <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                        <CardBody>
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a href="#/" class="btn btn-primary">Read More &rarr;</a>
                        </CardBody>
                        <CardFooter className="text-muted">
                            Posted on January 1, 2017 by
                            <a href="#">Start Bootstrap</a>
                        </CardFooter>
                    </Card>            
    
                    <ul class="pagination justify-content-center mb-4">
                        <li class="page-item">
                            <a class="page-link" href="#">&larr; Older</a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Newer &rarr;</a>
                        </li>
                    </ul>                
                </Col>
                <Col md="4">
                    <Card className="my-4">
                        <h5 class="card-header">Search</h5>
                        <CardBody>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for..."/>
                                <span class="input-group-btn">
                                    <button class="btn btn-secondary" type="button">Go!</button>
                                </span>
                            </div>
                        </CardBody>
                    </Card>                
                    <Card className="my-4">
                        <h5 class="card-header">Categories</h5>
                        <CardBody>
                        <Row>
                            <Col lg="6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">HTML</a>
                                    </li>
                                    <li>
                                        <a href="#">Freebies</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg="6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS</a>
                                    </li>
                                    <li>
                                        <a href="#">Tutorials</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>                                                        
                <Card className="my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <CardBody>
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </CardBody>
                </Card>
            </Col>
        </Row>                
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

          <div class="container">
        
            <div class="row">
        

              <div class="col-md-8">
        
                <h1 class="my-4">Page Heading
                  <small>Secondary Text</small>
                </h1>
        

                <div class="card mb-4">
                  <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div class="card-body">
                    <h2 class="card-title">Post Title</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div class="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <div class="card mb-4">
                  <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div class="card-body">
                    <h2 class="card-title">Post Title</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div class="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <div class="card mb-4">
                  <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
                  <div class="card-body">
                    <h2 class="card-title">Post Title</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <a href="#" class="btn btn-primary">Read More &rarr;</a>
                  </div>
                  <div class="card-footer text-muted">
                    Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                  </div>
                </div>
        
                
                <ul class="pagination justify-content-center mb-4">
                  <li class="page-item">
                    <a class="page-link" href="#">&larr; Older</a>
                  </li>
                  <li class="page-item disabled">
                    <a class="page-link" href="#">Newer &rarr;</a>
                  </li>
                </ul>
        
              </div>
        
              
              <div class="col-md-4">
        

                <div class="card my-4">
                  <h5 class="card-header">Search</h5>
                  <div class="card-body">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search for...">
                      <span class="input-group-btn">
                        <button class="btn btn-secondary" type="button">Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
        

                <div class="card my-4">
                  <h5 class="card-header">Categories</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-6">
                        <ul class="list-unstyled mb-0">
                          <li>
                            <a href="#">Web Design</a>
                          </li>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">Freebies</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <ul class="list-unstyled mb-0">
                          <li>
                            <a href="#">JavaScript</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                          <li>
                            <a href="#">Tutorials</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
        
                
                <div class="card my-4">
                  <h5 class="card-header">Side Widget</h5>
                  <div class="card-body">
                    You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                  </div>
                </div>
        
              </div>
        
            </div>            
        
          </div>
                
</div>
          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>            
     </footer>     */