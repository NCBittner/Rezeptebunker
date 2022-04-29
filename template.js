function openTab(tabLink) {
  let tabContent = document.getElementById('tabcontent');
  let target     = tabLink.dataset.target;

  // Set target into body attribute and as tab content
  document.body.dataset.tab = target;
  tabContent.innerText = tabLink.innerText;
  tabContent.className = target;

  // Load content
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementsByTagName('main')[0].innerHTML = xhr.responseText;
    }
  }

  xhr.open('GET', 'partly/' + target + '.html', true);
  xhr.setRequestHeader('Content-Type', 'text/html');
  xhr.send();
}

function main() {
  init();

  let tabLinks = document.getElementsByClassName('tablink');

  for (let i = 0; i < tabLinks.length; i++) {
    let tabLink = tabLinks[i];

    tabLink.addEventListener('click', function () {
      openTab(tabLink);
    });
  }
}

function init() {
  let target     = document.body.dataset.tab;
  let tabLink    = document.body.querySelector('.tablink[data-target="' + target + '"]');

  openTab(tabLink);
}

main();
