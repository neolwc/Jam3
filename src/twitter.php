<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.twitter.com/1.1/search/tweets.json?q=%2523Jam3&count=5&lang=en",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer AAAAAAAAAAAAAAAAAAAAAMw%2BxAAAAAAAxx0PIp0PvIEwlPDkOgDcYlWdazo%3DJX6ZY8URq7UNP7m2e1u5xSXU5VNWLzdnUePsl3Cj08og503wiw"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  header('Content-Type: application/json');
  header("Access-Control-Allow-Origin: *");
  echo $response;
}