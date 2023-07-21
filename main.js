var canvas = document.getElementById('canvas');
//js 선택자 공부
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window. innerHeight - 100;

//캔버스 태그를 이용한 최소한의 그림그리기 위한 기본 코드

// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100);
// x=10 y=10이라는 좌표에서 100*100의 사각형을 그리기
// 하지만 보통은 아래와 같이 캐릭터의 특성을 따로 저장해서 사용한다

var dino = {
    x: 10,
    y: 200,
    //처음 등장할 좌표
    width : 50,
    height : 50,
    //캐릭터의 지정 크기
    draw(){
        ctx.fillStyle = 'green';
        //ctx.fillRect(10,10,100,100);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //위처럼 지정하면 x와 y값만 수정하면 전체 수정됨
    }
/*draw라는 함수에 dino가 그려지는 기능을 저장한다. 
등장 캐릭터의 속성부터 object 자료에 정리해두면 편리*/
}
dino.x += 1;
/*이제 공룡 이동하기->x좌표를 수정해야지!->애니메이션은 어떻게 실행?
dino.x +=1; 로 수정
1초에 60번정도 +1을 해준다.*/
dino.draw()

//장에물도 object 자료에 정리해두기 but 장애물은 width, height가 각각 다름->비슷한 object 많이 필요=> class로 만들기

//함수 간단히 공부
class Cactus {
    constructor(){
        this.x = 500;
        this.y= 200;
        this.width = 50;
        this. height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
        
    //.draw하면 실행될 수 있도록 draw함수를 넣어준다.
}

//장애물 하나 만들기-new 함수 공부하기


var cactus = new Cactus();
cactus.draw()

/*기본적인 구조
function 프레임마다실행할거(){
    requestAnimationFrame(프레임마다실행할거);
}

프레임마다실행할거();*/

var timer = 0;
var cactus여러개 = [];
//장애물 여러개 관리하는 법


function 프레임마다실행할거(){
    requestAnimationFrame(프레임마다실행할거);
    timer++;
    /*프레임마다 타이머가 1씩 올라감, 만약 이 타이머가
    120의 배수까지 도달한다면 cactus 그리기*/


    ctx.clearRect(0,0, canvas.width, canvas.height);
   
    //1초에 1번 cactus 그려주기
    if (timer%120 === 0){
        var cactus = new Cactus();//장애물 1개 스폰. 여러개 관리하려면 array 사용
        cactus여러개.push(cactus);
        
        
         //120프레임에 1번씩 생성해서 array에 담아준다

    }
    cactus여러개. forEach((a)=>{
        a.x--;
        a.draw();
        //array에 있던거 다 draw
    })
    // dino.x++;
    
    //but 이것만 있으면 잔상이 남아서 줄이 생긴다.=> 그리고 지우고 그리고 지우고 하기
    //clearRect라는 함수 사용

    //1초에 60프레임으로 동작하는 컴퓨터라면 그렇게 장애물 생성해준다.
    
    dino.draw();

    
}

프레임마다실행할거();