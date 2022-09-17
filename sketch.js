var weight
var sum
var avergae

function setup() 
{
  createCanvas(400,400);
  weight=[21,90,83,12,1,7,69,42,77,0]
  sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5]+weight[6]+weight[7]+weight[8]+weight[9]
  average=sum/weight.length
  console.log(average)
}

function draw() 
{
background(51);

}

