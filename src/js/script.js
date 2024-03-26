const elList = document.getElementById('data-list');
const elHover = document.getElementsByClassName('data-list-hover-box');


uyJihozlari.forEach((item, index) => {
    const elItem = document.createElement('li');
    const elImg = document.createElement('img');
    const elName = document.createElement('h2');
    const elDescription = document.createElement('p');
    const elWrap = document.createElement('div');
    const elPrice = document.createElement('h4');
    const disCountedPrice = document.createElement('s');


    elList.append(elItem)
    elItem.append(elImg)
    elItem.append(elName)
    elItem.append(elDescription)
    elItem.append(elWrap)
    elWrap.append(elPrice)
    elWrap.append(disCountedPrice)

    elImg.src = item.image
    elName.textContent = item.roomName
    elDescription.textContent = item.roomType.slice(0, 20) + '...'
    elPrice.textContent = 'Rp ' + item.price + '00'
    disCountedPrice.textContent = 'Rp' + item.discountedPrice + '000'
    
})

elItem.append(elHover)


elList.addEventListener('mouseover', () => {

    elHover.style.display = 'flex'
  
});

