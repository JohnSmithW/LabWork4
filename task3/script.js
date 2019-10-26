(function totalCommanderSwitch() {
  var file = document.querySelectorAll('.active #left .file');
  var fileSide = document.querySelectorAll('.active #right .file');
  var boxInAction = document.querySelectorAll('.main-block');
  var fileNumb = 0;
  var fileSideNumb = 0;
  var boxNumb = 0;

  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
      case 37:
        boxInAction[0].classList.add('active');
        boxInAction[1].classList.remove('active');
        file[fileNumb].classList.add('selected');
        fileSide[fileSideNumb].classList.remove('selected');
        boxNumb = 0;
        break;
      case 39:
        boxInAction[0].classList.remove('active');
        boxInAction[1].classList.add('active');
        fileSide[fileSideNumb].classList.add('selected');
        file[fileNumb].classList.remove('selected');
        boxNumb = 1;
        break;
    }
  })

  document.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowDown' && boxNumb === 0) {
      for (let i = 0; i < file.length; i++) {
        file[i].classList.remove('selected');
      };
      fileNumb = fileNumb + 1;
      if (fileNumb > file.length - 1) {
        fileNumb = 0;
      }
      file[fileNumb].classList.add('selected');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowUp' && boxNumb === 0) {
      for (let i = 0; i < file.length; i++) {
        file[i].classList.remove('selected');
      };
      fileNumb = fileNumb - 1;
      if (fileNumb < 0) {
        fileNumb = file.length - 1;
      }
      file[fileNumb].classList.add('selected');
    }
  });


  document.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowDown' && boxNumb === 1) {
      for (let i = 0; i < fileSide.length; i++) {
        fileSide[i].classList.remove('selected');
      };
      fileSideNumb = fileSideNumb + 1;
      if (fileSideNumb > fileSide.length - 1) {
        fileSideNumb = 0;
      }
      fileSide[fileSideNumb].classList.add('selected');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowUp' && boxNumb === 1) {
      for (let i = 0; i < fileSide.length; i++) {
        fileSide[i].classList.remove('selected');
      };
      fileSideNumb = fileSideNumb - 1;
      if (fileSideNumb < 0) {
        fileSideNumb = fileSide.length - 1;
      }
      fileSide[fileSideNumb].classList.add('selected');
    }
  });
})();