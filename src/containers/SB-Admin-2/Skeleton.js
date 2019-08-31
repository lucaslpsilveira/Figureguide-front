import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import "../../styles/SB-Admin-2/sb-admin-2.css";

const TopMenu = React.lazy(() => import('./TopMenu'));
const SideMenu = React.lazy(() => import('./SideMenu'));

class DefaultLayout extends Component {  

  loading = () => <div className="text-center"></div>

  render() {  

    return (      
      <> 
        <div id="wrapper">
            <Suspense fallback={this.loading()}>
                <SideMenu/>
            </Suspense>     
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Suspense fallback={this.loading()}>
                        <TopMenu/>
                    </Suspense>   
                    <div className="container-fluid">
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
                                <Redirect from="/" to="/admin" />
                            </Switch>
                        </Suspense>
                    </div>
                </div>                
            </div>                                
        </div>               
    </>                           
    );
  }
}

export default DefaultLayout;
