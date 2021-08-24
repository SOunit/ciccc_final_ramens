console.log("hi from js");

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");

  const createCloseButton = () => {
    const newElement = document.createElement("span");
    const newContent = document.createTextNode("close");
    newElement.appendChild(newContent);
    newElement.setAttribute("id", "close");
    newElement.setAttribute("class", "material-icons");

    // get parents' element
    const parentDiv = document.getElementsByClassName("menu-button");
    // get child's element to insert before
    const spanBefore = document.getElementById("open");

    // check
    // console.log('test insertBefore')
    // console.log('parentDiv', parentDiv[0]);
    // console.log('parentDiv.insertBefore',parentDiv[0].insertBefore);
    // console.log('newElement',newElement);
    // console.log('spanBefore',spanBefore);

    // insert
    parentDiv[0].insertBefore(newElement, spanBefore);
  };

  const deleteCloseButton = () => {
    const closeButton = document.getElementById("close");
    console.log(closeButton);
    // const parentDiv = document.getElementsByClassName("menu-button");
    // parentDiv[0].remove(closeButton);
    closeButton.remove();
  };

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hide");

    const close = document.getElementById("close");
    //check
    console.log("test close");
    console.log("close", close);

    if (close == null) {
      createCloseButton();

      const close = document.getElementById("close");
      close.addEventListener("click", () => {
        overlay.classList.remove("show");
        open.classList.remove("hide");
        close.classList.add("hide");
      });
    } else {
      deleteCloseButton();
      createCloseButton();

      const close = document.getElementById("close");
      close.addEventListener("click", () => {
        overlay.classList.remove("show");
        open.classList.remove("hide");
        close.classList.add("hide");
      });
    }
  });
}
