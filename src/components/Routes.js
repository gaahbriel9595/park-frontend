import React from 'react';

import { Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import Caixa from './Caixa';
import Valet from './Valet';
import Vagas from './Vagas';


export default props => (
    <HashRouter>
        <Route path='/caixa' component={Caixa} />
        <Route path='/valet' component={Valet} />
        <Route path='/vagas' component={Vagas} />

        <Redirect from='/*' to='/vagas' />
    </HashRouter>
);
 