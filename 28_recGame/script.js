let rect = document.querySelector('#center')

rect.addEventListener('mousemove', function(details){
    let rectangleLocation = rect.getBoundingClientRect()
    let insiderectval = details.clientX - rectangleLocation.left

    if(insiderectval < rectangleLocation.width / 2){
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insiderectval)
        gsap.to(rect, {
            background: `rgb(${redColor}, 0, 0)`,
        })
    }
    else 
    {

            let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width , 0, 255, insiderectval)
            gsap.to(rect, {
                background: `rgb(0, 0, ${blueColor})`,
            })
 
}
})
