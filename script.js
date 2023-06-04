
function See(){
    let group_value = document.getElementById('Group').value;
    // console.log(group_value.slice(-3,-2))
    let x = group_value.slice(-3,-2)
    switch (x) {
        case '1':
            document.getElementById('Text').innerHTML= 'Siz seher qrupusunuz  '+ group_value
            document.getElementById('Text').style.color='yellow';
            break;
        case '2':
            document.getElementById('Text').innerHTML='Siz gunorta qrupusunuz'
            document.getElementById('Text').style.color='red';
            
            break;
        case '3':
            document.getElementById('Text').innerHTML='Siz axsam qrupusunuz'
            if(document.body.style.backgroundColor=='black'){
            document.getElementById('Text').style.color='white';
            }
            else{
                document.getElementById('Text').style.color='black';

            }
            break;
    
        default:
            alert('Invalid group...')
            break;
    }
}


function Dark(){
    
    if(document.body.style.backgroundColor=='black'){
        document.body.style.backgroundColor='white'
        document.getElementById('Group').style.backgroundColor='rgba(225, 161, 12, 0.63)'
        document.getElementById('See').style.backgroundColor='rgba(67, 234, 229, 0.596)'
        document.getElementById('Dark').style.backgroundColor='black'
        document.getElementById('Dark').style.color='white'
        document.getElementById('Dark').innerHTML='<i class="fa-regular fa-moon"></i>'

    }
    else{
        document.body.style.backgroundColor='black'
        document.getElementById('Group').style.backgroundColor='white'
        document.getElementById('See').style.backgroundColor='white'
        document.getElementById('Dark').style.backgroundColor='white'
        document.getElementById('Dark').style.color='black'
        document.getElementById('Dark').innerHTML='<i class="fa-regular fa-sun"></i>'

    }
}










