$(document).ready(function(){

  $.ajax({
    url: 'https://glacial-falls-73483.herokuapp.com/api/tables',
    dataType: 'JSON',
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data);
        var name = data[i].name;
        var email = data[i].email;
        var phone = data[i].phone_number;
        var id = data[i].id;
        var tr = $('<tr>');
        tr.addClass('table-row');
        tr.append($('<td class="text-center">').text(name));
        tr.append($('<td class="text-center">').text(email));
        tr.append($('<td class="text-center">').text(phone));
        tr.append($('<td class="text-center">').text(id));
        $('#tables').append(tr);
      }
    }
  });

  $.ajax({
    url: 'https://glacial-falls-73483.herokuapp.com/api/waitlist',
    dataType: 'JSON',
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data);
        var name = data[i].name;
        var email = data[i].email;
        var phone = data[i].phone_number;
        var id = data[i].id;
        var tr = $('<tr>');
        tr.addClass('table-row');
        tr.append($('<td class="text-center">').text(name));
        tr.append($('<td class="text-center">').text(email));
        tr.append($('<td class="text-center">').text(phone));
        tr.append($('<td class="text-center">').text(id));
        $('#waitlist').append(tr);
      }
    }
  });
});
