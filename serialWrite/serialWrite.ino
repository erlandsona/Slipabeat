#define inputs 4

int THRESHOLD = 1023;//IMPORTANT FOR SENSITIVITY, also maybe possible to turn into macro?
long lastDebounceTime = 0;  // the last time the output pin was toggled
long debounceDelay = 1000;    // the debounce time; increase if the output flickers, currently 1000 msecs or 1 second, work with debugging
bool hit;
int currentState[inputs];
int lastState[inputs]= {LOW,LOW,LOW,LOW};

void setup() {
  pinMode(0, INPUT);//leftTre
  pinMode(1, INPUT);//leftBass
  pinMode(2, INPUT);//rightTre
  pinMode(3, INPUT);//RightBass
  Serial.begin(9600);
  
}
void loop() {
  hit= false;
//  int currReading[inputs]= {0,0,0,0};
String jsonString="\"{" ;
for (int i=0;i<inputs;i++){
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
   if ((millis() - lastDebounceTime) > debounceDelay) {// the debounce time is good
   if(analogRead(i)>=THRESHOLD&& lastState[i]== LOW){
//      Serial.println( millis());//doebouncing debouncer
//     Serial.println( lastDebounceTime);//debugging debouncer
     // Serial.println(analogRead(i));
      hit= true; //a boolean to let the serial write know to send a message
     jsonString= jsonString + "\'" + key + "\': 1" ;
     lastState[i]=HIGH; //a limiter to know not to receive several inputs from the same button
     lastDebounceTime = millis(); //reset the counter to prevent several values from being detected
    }
   else if(analogRead(i)== 0){ // value not read and has been cleaned (meaning the foot has been lifted up
   jsonString= jsonString +  "\'" + key + "\': 0" ;
       lastState[i]=LOW;//reset the limiter      
   }//end else
   else{
     jsonString= jsonString +  "\'" + key + "\': 0" ; // a default value for when the lastState == HIGH and may or may not be getting a correct read
   }
  }
   else{ //if item was recently debounced, prevent several correct inputs from showing up
     jsonString= jsonString +  "\'" + key + "\': 0" ;
   }
 
 
 if(i == inputs-1){ //determining where the last input is
   jsonString= jsonString + "}\" \n";}//last item in list
 else{
  jsonString = jsonString +", "; //every other item
}

}//endfor

  char jsonOut[100]="";// a buffer, required for serial write, 100 is an arbitrarily large number
  if(hit==true){ // if the signal was previously low, recieved a hit and the debouncing limiter was not reset
    jsonString.toCharArray(jsonOut, jsonString.length()); //string to char array function
   Serial.write(jsonOut); //self documenting, arduino monitor doesn't recognise /n but println does
  /*for (int i=0;i<inputs;i++){
  Serial.println(currReading[i]);//debugging purposes
  }*/
  //Serial.println(jsonString); //debugging purposes
}
delay(100);  //logically should be able to remove, but DO NOT REMOVE UNLESS CERTAIN
  
}
