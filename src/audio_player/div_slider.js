var slider, rect, ting;

function stuff() {
  slider = document.getElementById('slider')
  cont = document.getElementById('container')
  rect = cont.getBoundingClientRect()
  contLength = rect.right - rect.left

  console.log(rect.top, rect.left, rect.bottom, rect.right)


  cont.addEventListener("click", getx);


  function getx() {
    ting = event.clientX;
    xLength = ting - rect.left
    xPercent = xLength / contLength * 100
    slider.style.width = xPercent.toString() + '%'
    console.log(ting)
    console.log(contLength)
    console.log(xLength)
    console.log(xPercent)
  }

  }


window.addEventListener("load", stuff);
