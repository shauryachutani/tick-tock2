function setup() {
  createCanvas(800,800);
 //creating hour minute and clock

}

function draw() {
  background(0);
  //creating the circle of clock
  hr = hour()
mn = minute()
sc = second()
strokeWeight(6)
  
//creating line
scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr,0,12,0,360)

push()
translate(200,400)
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,0,-100)
pop()

push()
translate(200,400)
rotate(mnAngle)
stroke("lime")
strokeWeight(7)
line(0,0,0,-60)
pop()

push()
translate(200,400)
rotate(hrAngle)
stroke("blue")
strokeWeight(7)
line(0,0,0,-50)
pop()


translate(200,400)
rotate(-90)
noFill();
stroke("red")
arc(0,0,250,250,0,scAngle)
stroke("lime")
arc(0,0,300,300,0,mnAngle)
stroke("blue")
arc(0,0,350,350,0,hrAngle)


drawSprites();
}
