<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;

class UserController extends Controller {

    public function register() {
        $email = Input::get('email');
        $existingUser = User::where("email", $email)->first();

        if($existingUser){
            return new JsonResponse("User already exists", 409);
        }


        $user = new User([
            'email' => $email,
            'name' => Input::get('name'),
            'password' => Hash::make(Input::get('password'))
        ]);
        $user->save();

        return new JsonResponse($user);
    }
}