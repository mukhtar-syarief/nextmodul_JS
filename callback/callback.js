function getData(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        return cb(JSON.parse(xhr.responseText));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  }
  
  const data = getData("https://jsonplaceholder.typicode.com/users", function(data) {
      data.forEach((data) => {
        document.getElementById('main_data').innerHTML+=`<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
        <td>${data.address.street},${data.address.suite},${data.address.city}</td>
        <td>${data.company.name}</td>
        </tr>`;      
      });
    });
