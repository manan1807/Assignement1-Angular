
$(function () {
    const pricearr = [];

    $('#priceselectionbtn').click(function () {
        $('.dropdown-item').click(function () {
            if ($(this).text() === "Low Price First") {
                $('#priceselectionbtn').text($(this).text());
                pricearr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                // console.log(pricearr)
            }
            else {
                $('#priceselectionbtn').text($(this).text());
                pricearr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                
                // console.log(pricearr)
            }
      printItems(pricearr);
        })

    })

    fetch('datajson/data.json')
        .then((response) => response.json()
            .then((data) => {
                data.forEach(temp => {
                    pricearr.push(temp);
                });
                printItems(pricearr);
            }));
         
    function printItems(arr) {
        // console.log(pricearr);
        
        const col = document.getElementById('row1');
        col.innerHTML='';
       arr.forEach((temp) =>{
            const divElement = document.createElement('div');
            divElement.innerHTML = getTemplate(temp);
            col.appendChild(divElement);
        
    });}
    function getTemplate(obj) {
        const { title, description, price } = obj;
        return `
        <div class="col" >
<div class="card" style="width: 18rem;">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/mouse.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="img/mouse-2.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="img/mouse-3.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="carousel-item ">
                        <img src="img/mouse4.jpg" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text" id="cardpara">${description}</p>
                <h4>Price: <span><img src="img/rupee.png" /></span><span class="price">${price}</span></h4>
                <a href="https://www.amazon.in/Zebronics-Wired-Optical-Mouse-Black/dp/B079Y6JZC8?th=1"
                    class="btn btn-primary">BUY</a>
            </div>
        </div>
        </div>
`;
    }

    $('#list-view').click(function () {
        $('#row1').addClass("row-cols-2");$('#row1').removeClass("row-cols-4");
    })
    $('#grid-view').click(function () {
        $('#row1').removeClass("row-cols-2"); $('#row1').addClass("row-cols-4");
      })
});

