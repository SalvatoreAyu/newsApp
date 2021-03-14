<?php
header("Content-type:text/json;charset=utf-8"); 
$apiUrl = 'http://api.salvatore.ink/toutiao/index';
$newstype=$_POST['type'];
// 请求参数
$params = array(    'type' => $newstype, 'key' => '33555ccf0c09287bb83b80f74672f153');
$paramsString = http_build_query($params);
// 发起接口请求
$response = juheHttpRequest($apiUrl, $paramsString, 1);
// 处理接口返回结果，根据自身业务逻辑修改处理
$paramstring = http_build_query($params);
$content = juheHttpRequest($apiUrl, $paramstring, 1);
$result = json_decode($content, true);
if ($result) {
    if ($result['error_code'] == 0) {
        // 请求成功，根据自身业务逻辑修改处理
        $news = $result['result']['data'];
        echo json_encode($news);
    } else {
        echo "{$result['error_code']}:{$result['reason']}" . PHP_EOL;
    }
} else {
    echo "请求失败";
}

function juheHttpRequest($url, $params = false, $ispost = 0)
{
    $httpInfo = array();
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'JUHE API');
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch, CURLOPT_TIMEOUT, 12);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    if ($ispost) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_URL, $url);
    } else {
        if ($params) {
            curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);
        } else {
            curl_setopt($ch, CURLOPT_URL, $url);
        }
    }
    $response = curl_exec($ch);
    if ($response === FALSE) {
        // echo "cURL Error: ".curl_error($ch);
        return false;
    }
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
    curl_close($ch);
    return $response;
}