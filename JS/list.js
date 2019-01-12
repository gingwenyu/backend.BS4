
$(document).ready(function () {

  //切換進度條
  $("#item3").click(function () {
    $("#pro3").slideToggle(500);
  });
  $("#pro3").click(function () {
    $("#pro3").slideToggle(500);
  });


  //動態新增editmodal顯示內容
  $('#editModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = btn.data('title');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body input').eq(2).val(title);

    var name = btn.data('name');
    var modal = $(this);
    modal.find('.modal-name').text(name);
    modal.find('.modal-body input').eq(0).val(name);

    var email = btn.data('email');
    var modal = $(this);
    modal.find('.modal-email').text(email);
    modal.find('.modal-body input').eq(1).val(email);


    ////表單驗證valid    
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })


  //動態新增removeModal顯示內容
  $('#removeModal').on('show.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = btn.data('title');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body input').eq(2).val(title);

    var name = btn.data('name');
    var modal = $(this);
    modal.find('.modal-name').text(name);
    modal.find('.modal-body input').eq(0).val(name);

    var email = btn.data('email');
    var modal = $(this);
    modal.find('.modal-email').text(email);
    modal.find('.modal-body input').eq(1).val(email);
  })

});


