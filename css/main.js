let back=[
{
    id:1,
    smal:"Earnings",
    price:"$350.4",
    imgUrl:"../images/lib1.svg"
},
{
    id:2,
    smal:"Spend this month",
    price:"$642.39",
    imgUrl:"../images/lib2.svg"
},
{
    id:3,
    smal:"Sales",
    price:"$574.34",
    imgUrl:""
},
{
    id:4,
    smal:"Your balance",
    price:"$1,000",
    imgUrl:"../images/lib4.svg"
},
{
    id:5,
    smal:"New Tasks",
    price:"154",
    imgUrl:"../images/lib5.svg"
},
{
    id:6,
    smal:"Total Projects",
    price:"2935",
    imgUrl:"../images/lib6.svg"
}
]
let UlElement= document.querySelector(".row")
back.map((item)=>{
    let liElement=document.createElement("li");
    let images=document.createElement("img");
    images.src=item.imgUrl
    let small=document.createElement("small");
    small.textContent=item.smal
    let h1Element=document.createElement("h1");
    h1Element.textContent=item.price;
    let span=document.createElement("span");
    span.append(small, h1Element)
    liElement.append(images, span)
    UlElement.append(liElement)
    console.log(item);
    liElement.className='col-2';
    h1Element.className="col-2_title"
})

  

