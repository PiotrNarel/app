import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Index from './index'
import RedirectRoute from './redirect'
import Login from './login'
import Signup from './signup'
import Reset from './reset'
import Recover from './recover'

export default (
	<Route path='/account' name='account'>
		<Index>
			<Switch>
				<Route path='/account/redirect' name='redirect' component={RedirectRoute} />
				<Route path='/account/login' name='login' component={Login} />
				<Route path='/account/signup' name='signup' component={Signup} />
				<Route path='/account/reset' name='reset' component={Reset} />
				<Route path='/account/recover/:token' name='recover' component={Recover} />

				<Route><Redirect to='/account/login' /></Route>
			</Switch>
		</Index>
	</Route>
)