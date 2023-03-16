function cardHoverBg (id){
    const cardElement = document.getElementById(id);
    cardElement.addEventListener('mouseenter', function(){
        const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
        cardElement.style.backgroundColor = randomColor;
    })
    cardElement.addEventListener('mouseleave', function(){
        cardElement.style.backgroundColor = '#ffffff';
    })
}
cardHoverBg ('card-1')
cardHoverBg ('card-2')
cardHoverBg ('card-3')
cardHoverBg ('card-4')
cardHoverBg ('card-5')
cardHoverBg ('card-6')