console.log('hi from js');

{
  const menu_button = document.getElementById('menu-button');
  const nav_container = document.querySelector('.nav-container');

  const addCloseButton = () => {
    const newElement = document.createElement('span');
    const newContent = document.createTextNode('close');
    newElement.appendChild(newContent);
    newElement.setAttribute('id', 'close-button');
    newElement.setAttribute('class', 'material-icons');

    // get parents' element
    const menu_button_container = document.getElementsByClassName(
      'menu-button-container'
    );
    // get child's element to insert before
    const spanBefore = document.getElementById('menu-button');

    // check
    // console.log('test insertBefore')
    // console.log('parentDiv', parentDiv[0]);
    // console.log('parentDiv.insertBefore',parentDiv[0].insertBefore);
    // console.log('newElement',newElement);
    // console.log('spanBefore',spanBefore);

    // insert
    menu_button_container[0].insertBefore(newElement, spanBefore);
  };

  const deleteCloseButton = () => {
    const closeButton = document.getElementById('close-button');
    console.log(closeButton);
    // const parentDiv = document.getElementsByClassName("menu-button");
    // parentDiv[0].remove(closeButton);
    closeButton.remove();
  };

  menu_button.addEventListener('click', () => {
    nav_container.classList.add('show');
    menu_button.classList.add('hide');

    const close_button = document.getElementById('close-button');
    //check
    // console.log("test close");
    // console.log("close", close);

    if (close_button === null) {
      addCloseButton();

      const close_button = document.getElementById('close-button');
      close_button.addEventListener('click', () => {
        nav_container.classList.remove('show');
        menu_button.classList.remove('hide');
        close_button.classList.add('hide');
      });
    } else {
      deleteCloseButton();
      addCloseButton();

      const close_button = document.getElementById('close-button');
      close_button.addEventListener('click', () => {
        nav_container.classList.remove('show');
        menu_button.classList.remove('hide');
        close_button.classList.add('hide');
      });
    }
  });
}


