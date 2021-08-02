const right__hamburger = document.querySelector('.right__hamburger')
const electric = document.querySelector('.electric')
const social__apps__top = document.querySelector('.social__apps__top')


const t1 = new TimelineLite({ paused : true, reversed : true})

t1.to('.top__right__bottom',0.5, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    // onComplete : function(){
    //     top__right__bottom.pointerEvents = 'all'
    // },
    ease: Power2.easeOut
})

// right__hamburger.addEventListener('click', ()=>{
//     t1.play();
// })

right__hamburger.addEventListener('click', ()=>{

if(t1.isActive()){
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
}

    toggleTween(t1)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
}



const t2 = new TimelineLite({ paused : true, reversed : true})

t2.to('.top__left__bottom',0.5, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    // onComplete : function(){
    //     top__right__bottom.pointerEvents = 'all'
    // },
    ease: Power2.easeOut
}).to(
    '.electric__arrow',0.3,{
        transform: 'rotate(360deg)'
    }
).to(
    '.top__right__options',0.2,{
        // display : 'none'
        x: '150%'
    },'-=1'
)

// electric.addEventListener('click', ()=>{
//     t1.play();
// })

electric.addEventListener('click', ()=>{

if(t2.isActive()){
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
}

    toggleTween(t2)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
}



const t3 = new TimelineLite({ paused : true, reversed : true})

t3.to('.social__apps__bottom',0.5, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    // onComplete : function(){
    //     top__right__bottom.pointerEvents = 'all'
    // },
    ease: Power2.easeOut
}).to(
    '.social__arrow',0.5,{
        transform: 'rotate(360deg)'
    }
)

// electric.addEventListener('click', ()=>{
//     t1.play();
// })

social__apps__top.addEventListener('click', ()=>{

if(t3.isActive()){
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
}

    toggleTween(t3)
})

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse()
}