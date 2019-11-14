'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// crete new users
Route.post('/users', 'UserController.create');

// auth session
Route.post('/sessions', 'SessionController.create');

// instead of creating a route for each method Adonis offers us a helper called resource
Route.resource('properties', 'PropertyController').apiOnly().middleware('auth')