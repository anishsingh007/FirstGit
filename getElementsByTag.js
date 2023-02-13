var li = document.getElementsByTagName('list-group-item');
console.log(li);
li[2].style.backgroundColor = '#00FF00';
for (let i = 0 ; i< li.length;i++){
    li[i].style.fontWeight = 'bold';

}

