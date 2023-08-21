

#include <Wire.h>
#include "SparkFun_ENS160.h"
#include <WiFi.h>
#include <FirebaseESP32.h>
#include <TimeLib.h>
#include <dht11.h>


SparkFun_ENS160 myENS;
FirebaseData firebaseData;

const char* FIREBASE_HOST = "https://meister-mimi-default-rtdb.europe-west1.firebasedatabase.app/";
#define FIREBASE_AUTH "AIzaSyB0PjT0hCV-9QpmwxNeWz0QZwdh4iPdYQQ" 
#define WIFI_SSID "WLAN-ZQFKN5" 
#define WIFI_PASSWORD "2273742280501096"
#define DHT11PIN 26

dht11 DHT11;
void setup() {

  Wire.begin();
  Serial.begin(115200);

  pinMode(14, OUTPUT);
  pinMode(17, OUTPUT);
  digitalWrite(14, HIGH);  

  if( !myENS.begin() ) {
    Serial.println("Did not begin.");
    while(1);
  }

  if( myENS.setOperatingMode(SFE_ENS160_RESET) ) {
    Serial.println("Ready.");
  }

  delay(100);

  myENS.setOperatingMode(SFE_ENS160_STANDARD);

  int ensStatus = myENS.getFlags();

  Serial.print("Gas Sensor Status Flag: ");
  Serial.println(ensStatus);
 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
 

  Serial.write("Setup finished...");
  digitalWrite(14, LOW);  
  digitalWrite(17, HIGH);  

}

void loop() {
  
  
  int currentDay = ((time(NULL) / 86400) + 4) % 7;
  if( myENS.checkDataStatus() ) {
    int chk = DHT11.read(DHT11PIN);
    Serial.print("RH: ");
    Serial.println( ((float)DHT11.humidity));
    Serial.print("Temp: ");
    Serial.println(((float)DHT11.temperature) );
    Serial.println(currentDay);
    float co2_ppm = myENS.getECO2();
    float co2_perc = (co2_ppm) / 1000000.0;
  
    float qly   = myENS.getAQI();
    
    float water = myENS.getRH();
  
    Serial.print("CO2 concentration (ppm): ");
    Serial.println(co2_ppm);
  


  
    

    Serial.print("Air Quallity: ");
    Serial.print(qly) ;
    Serial.println();


    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/current_data/CO2", co2_perc);
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/co2ppm/pmm", co2_ppm);
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/current_data/H20", water);
    
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/current_data/AirQualtiy", qly);
    
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/LastWeek/" + getDay(weekday()), co2_perc);
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/Temp/Now", (float)DHT11.temperature);
    Firebase.setFloat(firebaseData, "/Arduino/devices/random_id/RH/Now", (float)DHT11.humidity);
  }
  delay(60000);
}

String getDay(int day){
  
  if (day == 1) {
    return "Sunday";
  } else if (day == 2) {
    return "Monday";
  } else if (day == 3) {
    return "Tuesday";
  } else if (day == 4) {
    return "Wednesday";
  } else if (day == 5) {
    return "Thursday";
  } else if (day == 6) {
    return "Friday";
  } else if (day == 0) {
    return "Saturday";
  } }



