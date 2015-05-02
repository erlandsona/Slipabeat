 //#include "pitches.h"
#include <Bridge.h>
#include <HttpClient.h>
//#include<String.h>
// notes in the melody:
// note durations: 4 = quarter note, 8 = eighth note, etc.:

int treble= 0;
int bass=1;
int inputs=2;
byte val[2] = {0,0};
int statePin = LOW;
int THRESHOLD = 250;
void setup() {
  pinMode(treble, INPUT);
    pinMode(bass, INPUT);
  //Bridge.begin();
  Serial.begin(9600);
  
}
void loop() {
  /*val[0] = analogRead(treble);    
  val[1] = analogRead(bass);
  if (val[treble] >= THRESHOLD){
  Serial.write(48 + treble);
 
}
else if (val[bass] >= THRESHOLD){
  Serial.write(48 + bass);
 
}
*/
bool hit= false;
String jsonString="\"{";
for (int i=0;i<inputs;i++){
 val[i]= analogRead(i); 
  String key;
   switch(i){
     case 0:
     key="TOE";
     break;
     case 1:
     key="HEEL";
     break;
     default:
     key="Bad";
     break;
     }

 if(val[i] >= THRESHOLD){ //value read
     hit = true;
     jsonString= jsonString + "\'" + key + "\': 1" ;
 }
 else{ // value not read
   jsonString= jsonString +  "\'" + key + "\': 0" ;
     
 }
 if(i == inputs-1){
   jsonString= jsonString + "}\"\n";
 }
 else{
  jsonString = jsonString +", "; 
 }
}
  char jsonOut[100];
  if(hit==true){
    jsonString.toCharArray(jsonOut, jsonString.length());
    Serial.write(jsonOut);
  //Serial.println(jsonString);
  
}
delay(100);
  
}
