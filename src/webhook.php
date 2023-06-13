<?php
$data_string = json_encode($_POST);
$key = "7f925317-c469-4ce9-bfd9-f2bc445ab5e5";

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://webhook.site/".$key);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);
$response = curl_exec ($curl);
curl_close ($curl);
echo $response;