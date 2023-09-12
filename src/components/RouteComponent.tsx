import React, {FC} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RoutesArr } from '../routes';


const RouterComponent:FC = () => {
    const location = useLocation()
    return (  
            <Routes location={location} key={location.pathname}>
                {RoutesArr.map(({path, element}) =>
                        <Route key={path} path={path} element={element}/>
                )}
            </Routes>
    );
};

export default RouterComponent;