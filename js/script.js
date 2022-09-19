boxNumbers()

function boxNumbers()
{
    let boxes= document.querySelectorAll('.box');
    boxes.forEach((box,i)=>{
        if(String(i).length==1 || (String(i).length==2 && Number(String(i)[0]))%2==0){
        }
        else{
            box.innerHTML = String(Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1) + `i=${i}`
        }
    })
}