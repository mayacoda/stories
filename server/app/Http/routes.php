<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get( '/', function () {
    //    return new \Illuminate\Http\JsonResponse( [
    //        "tau" => "cau"
    //    ]);
    return view( 'welcome' );
} );

//Route::get('/api/me', ['use'=> 'MyController::getMyself', "as" => "me"]);

Route::group( ['prefix' => 'api'], function () {

    // all public stories
    Route::get( 'public', function () {

    } );

    // single public story
    Route::get( 'public/{id}', function ($id) {

    } );

    // publish timeline
    Route::post( 'public', function () {

    } );

    // log user in
    Route::post( 'login', function () {

    } );

    // create user
    Route::post( 'register', ["uses" => "UserController@register"]);

    Route::group( ['middleware' => 'auth'], function () {

        // current active user
        Route::get( 'me', function () {

        } );

        // get my timelines
        Route::get( 'me/timeline', function () {

        } );

        // get a single of my timelines
        Route::get( 'me/timeline/{id}', function ($id) {

        } );

        // create a timeline
        Route::post( 'me/timeline/{id}', function ($id) {

        } );

        // update a timeline
        Route::put( 'me/timeline/{id}', function ($id) {

        } );

        // delete a timeline
        Route::delete( 'me/timeline/{id}', function ($id) {

        } );
    } );

} );


