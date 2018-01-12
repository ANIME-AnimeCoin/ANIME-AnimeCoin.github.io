// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 70;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    
    var to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    $.keyframe.define([{
        name: 'bouncing-effect-'+i,
        //'0%': {"-webkit-transform":"translate(0px,0px)"},
        '50%': {"-webkit-transform":`translate(${to.x}rem, ${to.y}rem)`},
        //'100%': {"-webkit-transform":"translate(0px,0px)"}
    }]);
    
    $(el).playKeyframe({
        name: 'bouncing-effect-'+i,
        duration: (Math.random() + 1) * 4000 + 'ms',
        timingFunction: 'ease-in-out',
        iterationCount: 'infinite',
        direction: 'alternate',
    });
  
});
