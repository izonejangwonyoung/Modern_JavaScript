function izone(name,position,birth){
    this.name=name;
    this.position=position;
    this.birth=birth;

}

////위는 아이즈원 멤버를 표현하는 개체를 생성하는 생성자




var izone=new izone("장원영","센터","2004")




console.log(izone)





////생성자
//
// var itzy={};
// itzy.name="예지",
// itzy.position="center"
//
//
//
// console.log(`${itzy.name}의 포지션은 ${itzy.position}입니다. `);


//
// var fromis1=new Fromis("송하영","센터");
// var fromis2=new Fromis("이채영","서브보컬");
// var fromis3=new Fromis("장규리","메인보컬");
//
//
// console.log(fromis1)




function Particle(x,y,vx,vy){
    this.x=x;
    this.y=y;
    this.vx=vx;
    this.vy=vy;
    this.velocity=Math.sqrt(vx*vx+vy*vy);


}
var p= new Particle(0,0,3,4);
console.log(p)


console.log("4.3.2 메서드를 가진 객체를 생성하는 생성자")
console.log("=======================================")






function  Circle(center,radius){
    this.center=center;
    this.radius=radius;
    this.area=function(){
        return Math.PI*(this.radius)^2;
    };
}

var p= {x:0, y:0};
var c= new Circle(p,2.0);
console.log(`넓이= ${c.area()}이고 중심 좌표는 ${c.center}`)

