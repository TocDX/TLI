let temperature = 1;


if (temperature <= 0) { // 조건부분이 충족되면 동작부분을 수행해라.
    console.log('물이 업니다.');
}else if (temperature < 100){
     console.log('물이 얼지도 끓지도 않습니다.');
}else if (temperature < 150){
    console.log('물이 끓습니다.');
}else{       
    console.log('물이 수증기가 되었습니다.');
};