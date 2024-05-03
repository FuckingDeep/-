
function yui () {
    let a = 0
    let i = 1000; 
    while (i > 0) { 
        task(i, a); 
        i = i - 7; 
        a++;
    } 
}
function task(i, a) { 
    setTimeout(function() { 
        window.scrollTo(0,999999999);
        let parent = document.querySelector('#parent');
        let div = document.createElement('div');
        div.className = "frase";
        div.innerHTML = i + ' - 7 = ' + (i - 7); 
        parent.append(div);
  }, 100 * a); 
} 