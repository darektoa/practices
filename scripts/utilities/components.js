const slideComponent = (props) => {
  const {key, title, desc, link, illustration} = props;
  const className = `slide slide-${key}`;
  const parentElmnt = document.createElement('div');

  parentElmnt.classList.value = className ;
  parentElmnt.innerHTML = `
    <div class="text-box">
      <h2>${title}</h2>
      <p>${desc}</p>
      <a href="${link[1]}">${link[0]}</a>
    </div>
    <div class="icon-circle"></div>
    <img class="illustration" src="${illustration}" />
  `;

  return parentElmnt;
};


export {
  slideComponent,
};