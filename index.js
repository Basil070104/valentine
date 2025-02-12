document.addEventListener('DOMContentLoaded', function () {
  // Yes button click event
  document.querySelector('.button_content .button:first-child').addEventListener('click', function () {
    document.getElementById('blastoiseImage').src = './gifs/nanami-touch.gif'; // Change to your new image path
    document.getElementById('yippee').src = './gifs/yippee-cat.gif';
    document.getElementById('pika').src = './gifs/pika-giphy.gif';
    document.getElementById('yippee').style.display = 'block';
    document.getElementById('pika').style.display = 'block';
    document.querySelector('.title').textContent = "GET READY TO BE WINE AND DINED. UR MINNNEEE NOW!!!!"; // Change title text for Yes
    document.getElementById('no').style.display = 'none'
    document.getElementById('yes').style.display = 'none'
  });

  // No button click event
  document.querySelector('.button_content .button:nth-child(2)').addEventListener('click', function () {
    document.getElementById('blastoiseImage').src = './gifs/rage-frustration.gif';
    document.querySelector('.title').textContent = "U DONT WANT ME :( TRY AGAIN";
    document.getElementById('yippee').style.display = 'none';
    document.getElementById('yes').style.width = '300px'
    document.getElementById('yes').style.height = '200px'
    document.getElementById('yes').style.fontSize = '2rem'
    document.getElementById('no').style.display = 'none'

    document.addEventListener('mousemove', function (event) {
      const yesButton = document.getElementById('yes');
      const buttonWidth = yesButton.offsetWidth;
      const buttonHeight = yesButton.offsetHeight;

      yesButton.style.position = 'absolute';
      yesButton.style.left = `${event.pageX - buttonWidth / 2}px`;
      yesButton.style.top = `${event.pageY - buttonHeight / 2}px`;
    });
  });
});
