 var matrix = [];
for(var i=0; i<8; i++) {
    matrix[i] = new Array(8);
}

var dx =[2,2,-2,-2,1,1,-1,-1];
var dy =[-1,1,-1,1,2,-2,2,-2];

var start_button=document.querySelector(".button_s");
var source_button=document.querySelector(".button_sp");
var destination_button=document.querySelector(".button_dp");
var reset=document.querySelector(".button_reset");
var grid=document.querySelector("#grid");
var BOX=document.querySelectorAll(".BoX");
var k=0;
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
matrix[i][j]=BOX[k];
k=k+1;
//matrix[i][j].style.backgroundColor="red";
}
}
var row,col,row1,col1;
source_button.addEventListener("click",function(){
// chosse a raandom cell and place the knight in that place
row=getRNDnumber();
col=getRNDnumber();
matrix[row][col].style.backgroundColor="green";

});

destination_button.addEventListener("click",function(){
// choose a random cell for destination except selected cell
row1=getRNDnumber();
col1=getRNDnumber();
matrix[row1][col1].style.backgroundColor="red";
});

function Queue() {
   this.elements = [];
}
Queue.prototype.enqueue = function ([a,b]) {
   this.elements.push([a,b]);
};
Queue.prototype.peek = function () {
    return this.elements[0];
};

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

Queue.prototype.dequeue = function () {
    return this.elements.shift();
};

Queue.prototype.length = function() {
    return this.elements.length;
}

function bfs(){
var mat=[];
for(var i=0;i<8;i++){
mat[i]=new Array(8);
}
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
mat[i][j]=0;
}
}
var q=new Queue();
q.enqueue([row,col]);
mat[row][col]=0;
while(!q.isEmpty()){
var in_i=q.peek()[0];
var in_j=q.peek()[1];
q.dequeue();

if(in_i==row1 && in_j==col1)
return mat[in_i][in_j];

for(var i=0;i<8;i++){
var curr_i=in_i+dx[i];
var curr_j=in_j+dy[i];
if(((curr_i>=0 && curr_i<8) && (curr_j>=0 && curr_j<8)) && !mat[curr_i][curr_j]){
q.enqueue([curr_i,curr_j]);
//matrix[curr_i][curr_j].style.backgroundColor="steelblue";
mat[curr_i][curr_j]=1+mat[in_i][in_j];
}
}
}
return -1;
}

start_button.addEventListener("click",function(){

// code for main funtionality 
console.log(bfs());

});

reset.addEventListener("click",function(){
// reset whole matrix to play again
for(var i=0;i<BOX.length;i++){
BOX[i].style.backgroundColor="white";
}
});

function getRNDnumber(){
	return Math.floor(Math.random()*8);
}