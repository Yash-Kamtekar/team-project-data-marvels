import React from 'react';
import { Route, Switch } from 'react-router-dom';
import getRoutes from '../routes/routes';

function ProtectedWebPage(props) {
    return (
        <div className='page-content h-100'>
            <div className='container-fluid p-2 p-md-4'>

                <React.Suspense>
                    <Switch>
                        {getRoutes().map((route, idx) => {
                            console.log(route, idx);
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => <route.component {...props} {...route.props} />}
                                    />
                                )
                            )
                        })}
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    )
}

export default ProtectedWebPage;