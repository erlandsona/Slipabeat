int inputs=4;

int val[4] = {0,0,0,0};
int statePin = LOW;
int THRESHOLD = 255;//IMPORTANT FOR SENSITIVITY
long lastDebounceTime = 0;  // the last time the output pin was toggled
long debounceDelay = 100;    // the debounce time; increase if the output flickers
//int outState[4]= {HIGH,HIGH,HIGH,HIGH};
bool hit;
int currentState[4];
int lastState[4]= {LOW,LOW,LOW,LOW};
void setup() {
  pinMode(0, INPUT);//leftTre
  pinMode(1, INPUT);//leftBass
  pinMode(2, INPUT);//rightTre
  pinMode(3, INPUT);//RightBass
  Serial.begin(9600);
  
}
void loop() {
  hit= false;
  int currReading[4]= {0,0,0,0};
String jsonString="\"{" ;
for (int i=0;i<inputs;i++){
/* if((byte)analogRead(i) >= THRESHOLD){
  Serial.println((byte)analogRead(i));
   currReading[i]= HIGH;
}
   else{
    currReading[i]= LOW; 
   }
  */ 
  String key;
   switch(i){
     case 0:
     key="TOE_LEFT";
     break;
     case 1:
     key="HEEL_LEFT";
     break;
     case 2:
     key="TOE_RIGHT";
     break;
     case 3:
     key="HEEL_RIGHT";
     break;
     default:
     key="Bad";
     break;
     }//end switch
   if ((millis() - lastDebounceTime) > debounceDelay) {
    if((byte)analogRead(i)>=THRESHOLD&& lastState[i]== LOW){
      hit= true;
     jsonString= jsonString + "\'" + key + "\': 1" ;
     lastState[i]=HIGH; 
    }
   else if((byte)analogRead(i)< 50){ // value not read
   jsonString= jsonString +  "\'" + key + "\': 0" ;
       lastState[i]=LOW;      
   }//end else
   else{
     jsonString= jsonString +  "\'" + key + "\': 0" ;
   }
  }
 
 
 if(i == inputs-1){
   jsonString= jsonString + "}\" \n";}
 else{
  jsonString = jsonString +", "; 
}

}//endfor
//delay(100);
  char jsonOut[100]="";
  if(hit==true){
    jsonString.toCharArray(jsonOut, jsonString.length());
   //Serial.write(jsonOut);
  /*for (int i=0;i<inputs;i++){
  Serial.println(currReading[i]);
  }*/
  Serial.println(jsonString);
}
delay(100);  
  
}
