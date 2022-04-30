const button = document.querySelector('#button');

button.addEventListener('click', go);

function go() {
    showCircle(50, 50, 150, div => {
      div.classList.add('message-ball');
      div.append('Hello world!');
    });
}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');

    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + '%';
    div.style.top = cy + '%';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    });
}