<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Exception;
use Firebase\JWT\JWT;
Use Firebase\JWT\Key;

class VerifyJwtToken
{
    public function handle($request, Closure $next)
    {
        try {
            if (!$request->hasHeader('Authorization')) {
                throw new Exception('Missing Authorization header');
            }

            $jwt = str_replace('Bearer ', '', $request->header('Authorization'));

            $key = env('JWT_SECRET');

            if ($key !== null) {
                $decoded = JWT::decode($jwt, new key ($key,'HS256'));
                $credentials = [
                    'login_id' => $decoded->login_id,
                    'password' => $decoded->password
                ];
                if(!Auth::attempt($credentials)){
                    return response()->json(['message' => "UnAuthorized"], 401);
                }
            }
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 401);
         }

        return $next($request);
    }
}
