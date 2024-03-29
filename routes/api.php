<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PastureController;
use App\Http\Controllers\HorseController;
use App\Http\Controllers\PoolController;
use App\Http\Controllers\RacePlanController;
use App\Http\Controllers\RanchController;
use App\Http\Controllers\SlopeController;
use App\Http\Controllers\TruckController;
use App\Http\Controllers\ReserveController;
use App\Http\Controllers\StallController;
use App\Http\Controllers\JockeyController;
use App\Http\Controllers\PresetController;
use App\Http\Controllers\RaceRegisterController;
use App\Http\Controllers\RaceController;

use App\Http\Controllers\Web\RaceManagementController;
use App\Http\Controllers\Web\ExpectedBattleController;
use App\Http\Controllers\Web\RankingController;

use App\Events\UserPointEvent;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\AuctionController;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// user handling

Route::post('/mobile-user', [UserController::class, 'loginMobile']);

Route::post('/hp-user', [UserController::class, 'loginHp']);

Route::post('/mobile-user-register', [UserController::class, 'registerMobile']);

Route::post('/hp-user-register', [UserController::class, 'registerHp']);

Route::post('/union-user-register', [UserController::class, 'unionUserRegister']);

Route::post('/user/{id}', [UserController::class, 'update']);

Route::get('/user/{id}', [UserController::class, 'show']);

Route::get('/randomTest', [HorseController::class, 'percentage']);

// after login in mobile app
Route::group(['middleware' => ['verifyMobileJwt']], function () {
    // pasture handling
    Route::post('/pasture', [PastureController::class, 'store']);
    Route::post('/checkPastureName', [PastureController::class, 'checkName']);
    
    // lineage handling
    Route::get('/getlineage', [HorseController::class, 'getRandHorse']);
    
    // horse handling
    Route::get('/horserand', [HorseController::class, 'requestRand']);
    Route::post('/savehorse', [HorseController::class, 'store']);

    // when user arrived pasture page
    Route::get('/horse', [HorseController::class, 'show']); //pasture
    Route::get('/horsestall', [HorseController::class, 'showStall']); //stall
    Route::post('/feedtrain', [HorseController::class, 'grow']);
    Route::post('/improvetrain', [HorseController::class, 'improve']);
    Route::post('/gotostall', [HorseController::class, 'gotoStall']);
    Route::post('/checkHorseName', [HorseController::class, 'checkName']);
    Route::post('/checkIllegalHorseName', [HorseController::class, 'checkIllegalWord']);
    Route::post('showHorseGrow', [HorseController::class, 'showGrowHorse']);


    // when level up buildings
    Route::post('/leveluppasture', [PastureController::class, 'levelUp']);
    Route::post('/leveluppool', [PoolController::class, 'levelUp']);
    Route::post('/levelupranch', [RanchController::class, 'levelUp']);
    Route::post('/levelupslope', [SlopeController::class, 'levelUp']);
    Route::post('/leveluptruck', [TruckController::class, 'levelUp']);

    //when level up buildings of stall
    Route::post('/levelupstall', [StallController::class, 'levelUp']);
    Route::post('/leveluppoolstall', [PoolController::class, 'levelUpS']);
    Route::post('/levelupranchstall', [RanchController::class, 'levelUpS']);
    Route::post('/levelupslopestall', [SlopeController::class, 'levelUpS']);
    Route::post('/leveluptruckstall', [TruckController::class, 'levelUpS']);

    // get User every mounting
    Route::post('/getuser', [UserController::class, 'getUser']);

    // get all building data
    Route::post('/getbuildingdata', [PastureController::class, 'getBuildingData']);
    Route::post('/getbuildingdatastall', [StallController::class, 'getBuildingData']);

    // get all race's plan
    Route::post('/getraceplan', [RacePlanController::class, 'getAll']);

    // post reserve food
    Route::post('/reservefood', [ReserveController::class, 'store']);
    Route::post('/getreservemenu', [ReserveController::class, 'show']);
    Route::post('/getreservemenustall', [ReserveController::class, 'showstall']);

    // get stall's data
    Route::get('/getstalls', [StallController::class, 'show']);
    Route::post('/getstallname', [StallController::class, 'showStallS']);
    Route::post('/getstallstate', [StallController::class, 'showStallState']);

    // Jockey handling
    Route::post('/storejockey', [JockeyController::class, 'store']);
    Route::post('/showjockey', [JockeyController::class, 'show']);
    Route::post('/growjockey', [JockeyController::class, 'grow']);
    Route::post('/improvejockey', [JockeyController::class, 'improve']);
    Route::post('/namecheckjockey', [JockeyController::class, 'nameCheck']);

    //handle preset
    Route::post('/storepreset', [PresetController::class, 'store']);
    Route::post('/storepresetstall', [PresetController::class, 'storeStall']);
    Route::post('/showpreset', [PresetController::class, 'show']);
    Route::post('/showpresetstall ', [PresetController::class, 'showStall']);

    //race register handling
    Route::post('/showraceplan', [RaceRegisterController::class, 'show']);
    Route::post('/storeraceregister', [RaceRegisterController::class, 'store']);
    Route::post('/backregister', [RaceRegisterController::class, 'backregister']);
    Route::post('/getregisterstate', [RaceRegisterController::class, 'registerState']);

    // racing handling
    Route::post('/getdataracing', [RaceController::class, 'show']);
    Route::post('/raceresult', [RaceController::class, 'race_result']);
    Route::post('/getraceresult', [RaceController::class, 'get_race_result']);

    // marry
    Route::get('/getknicks', [HorseController::class, 'getKnicks']); //pasture    
    Route::post('/storechild', [HorseController::class, 'storeChild']);
    
    //auction
    Route::post('/send', [MessageController::class, 'send']);
    Route::apiResource('auction', AuctionController::class);
});

// after login in hp website
Route::group(['middleware' => ['verifyHpJwt']], function () {

    // * ** *** race management *** *** *
    Route::get('/racemanagement', [RaceManagementController::class, 'index']);
    Route::post('/racemanagement/get-specific-race-data', [RaceManagementController::class, 'get_specific_race_data']);
    Route::post('/racemanagement', [RaceManagementController::class, 'store']);
    Route::delete('/racemanagement/{id}', [RaceManagementController::class, 'destroy']);
    Route::put('/racemanagement/{id}', [RaceManagementController::class, 'update']);
    Route::post('/racemanagement/create-race-result', [RaceManagementController::class, 'create_race_result']);
    Route::get('/racemanagement/get-places', [RaceManagementController::class, 'get_places']);
        
    // * ** *** expected battle *** *** *
    Route::apiResource('expectedbattle', ExpectedBattleController::class);

    
    // * ** *** ranking *** *** *
    Route::get('/ranking/get_month', [RankingController::class, 'get_month']);
    Route::get('/ranking/get_year', [RankingController::class, 'get_year']);
    Route::get('/ranking/first_half_year', [RankingController::class, 'first_half_year']);
    Route::get('/ranking/second_half_year', [RankingController::class, 'second_half_year']);

    // * ** *** mypage *** *** *
    Route::get('/mypage/{id}', [RankingController::class, 'get_mypage_userdata']);

    
    // * ** *** grade_management *** *** *
    Route::get('/grade_management', [RankingController::class, 'get_grade_management_userdata']);

    // * ** *** home *** *** *
    Route::get('/home_data', [RankingController::class, 'get_home_data']);

        // * ** *** user_management *** *** *
    Route::get('/user_management', [RankingController::class, 'get_user_management_userdata']);
    Route::put('/user_management/{id}', [RankingController::class, 'update_user_management_userdata']);
    Route::post('/user_management/format', [UserController::class, 'format_password']);
    // ===================================================================================================
});

Route::get('/test', function(){
    $startTime = Carbon::createFromTime(12, 0, 0); // Create a Carbon instance for 12 o'clock

    $endTime = $startTime->copy()->addRealHours(7.1);
    // broadcast(new UserPointEvent(8000));
    return $endTime->diffInSeconds("2023-11-15 18:59:00");
    // return $startTime->copy()->addHours(6)->format('Y-m-d H:i:s');
});