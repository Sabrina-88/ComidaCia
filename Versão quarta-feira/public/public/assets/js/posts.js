var database = firebase.database();
var USER_ID = window.location.search.match(/\?userId=(.*)/)[1];

$(document).ready(function () {

  database.ref("users/" + USER_ID).once("value")
    .then(function (snapshot) {
      var userInfo = snapshot.val();
      $(".user-name").text(userInfo.name)
    })

  database.ref("users").once("value")
    .then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        createUsers(childData.name, childKey);
      });
    })

  database.ref('posts/' + USER_ID).once('value').then(function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      createPost(childData.text, childKey);
    });
  });

  $(".send-button").click(function (event) {
    event.preventDefault();
    var text = $(".post-input").val();
    $(".post-input").val("");
    var newPostInDB = database.ref('posts/' + USER_ID).push({
      text: text
    });
    createPost(text, newPostInDB.key);
  })

 function createPost(text, key) {
  $(".posts-list").append(`
    <li class="eachPost">
      <span data-text-id="${key}" >${text}</span>
      <button class="btnEdit" data-edit-id="${key}" >Editar</button>
      <button class="btnDel" data-delete-id="${key}" >Excluir</button>
    </li>
  `);

    $(`button[data-delete-id=${key}]`).click(function () {
      $(this).parent().remove();
      database.ref('posts/' + USER_ID + "/" + key).remove();
    });

    $(`button[data-edit-id=${key}]`).click(function () {
      var newText = prompt(`Altere o seu texto: ${text}`);
      $(`span[data-text-id=${key}]`).text(newText);
      database.ref(`posts/${USER_ID}/${key}`).update({
        text: newText
      })
    });
  }

   // Contar Likes

   $(document).on('click','#icon-like',function(e){
    var cont=1;
    $(this).toggleClass('pink-text');
    $('#contador').html(cont +' '+'like');
    cont++;
  });
    //fim da função like

  function createUsers(name, key) {
    if (key !== USER_ID) {
      $(".users-list").append(`
          <li>
          <span>${name}</span>
          <button class="btnFollow" data-user-id="${key}">Seguir</button>
          </li>
          `);
      $(`button[data-user-id=${key}]`).click(function () {
        alert("Seguindo "+ name + "!!!");
        if (!$(this).disabled) {
          $(this).prop('disabled', true);
        }
        database.ref('friendship/' + USER_ID).push({
          friendId: key
        });
        database.ref('posts/' + key).once('value').then(function (snapshot) {
          snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            createPost(childData.text, childKey);
          });
        });
      });
    }
  }
});