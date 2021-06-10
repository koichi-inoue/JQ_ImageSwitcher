$(function() {

  let fileName = [
    // 画像ファイルのフルパスを記載して下さい。
    'images/PIC_01.jpg',
    'images/PIC_02.jpg',
    'images/PIC_03.jpg',
    'images/PIC_04.jpg',
    'images/PIC_05.jpg'
  ]

  let current = 0;

  $('.select-button').each(function(i){
    $('.select-button').eq(i).on('click',function(){
      current = i;
      $('#picture').attr('src', fileName[current]);
      $('#caption').html(fileName[current]);
    });
  });

  $('#prevButton').on('click',function(){
    current --;
    if( current < 0) current = fileName.length - 1;
    $('#picture').attr('src', fileName[current]);
    $('#caption').html(fileName[current]);
  });

  $('#nextButton').on('click',function(){
    current ++;
    if( fileName.length <= current ) current = 0;
    $('#picture').attr('src', fileName[current]);
    $('#caption').html(fileName[current]);
  });

});
