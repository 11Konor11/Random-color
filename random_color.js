const plainBtn = document.querySelector("#plain")
const hexBtn = document.querySelector("#hex")
const plainTxtArray = ["blue", "yellow", "green", "gray", "brown", "beige", "red", "purple", "pink", "orange", "black", "white"]
const text = document.querySelector("#text")
plainBtn.addEventListener("click",function(){
	let rand = Math.floor(Math.random() * plainTxtArray.length)
	text.innerText = `Color: ${plainTxtArray[rand]}`
	document.body.style.background = plainTxtArray[rand]
})


hexBtn.addEventListener("click",function(){
	let rand = "#"
	for(i=0;i<6;i++){
		rand += Math.ceil(Math.random() * 9)
	}
	text.innerText = `Color: ${rand}`
	document.body.style.background = rand
})