
int treble= 0;
int bass=1;
int trebleo=2;
int basso=3;
int inputs=4;

byte val[4] = {0,0,0,0};
int statePin = LOW;
int THRESHOLD = 250;//IMPORTANT FOR SENSITIVITY

void setup() {
  pinMode(0, INPUT);//leftTre
  pinMode(1, INPUT);//leftBass
  pinMode(2, INPUT);//rightTre
  pinMode(3, INPUT);//RightBass
  Serial.begin(9600);
  
}
void loop() {
bool hit= false;
String jsonString="\"{";
for (int i=0;i<inputs;i++){
 val[i]= analogRead(i); 
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

 if(val[i] >= THRESHOLD){ //value read
     hit = true;
     jsonString= jsonString + "\'" + key + "\': 1" ;
 }//endif
 else{ // value not read
   jsonString= jsonString +  "\'" + key + "\': 0" ;
     
 }//end else
 if(i == inputs-1)
   jsonString= jsonString + "}\" \n";
 
 else
  jsonString = jsonString +", "; 
 
}//endfor
  char jsonOut[100]="";
  if(hit==true){
    jsonString.toCharArray(jsonOut, jsonString.length());
    Serial.write(jsonOut);
  //Serial.println(jsonString);
  
}
delay(100);
  
}
