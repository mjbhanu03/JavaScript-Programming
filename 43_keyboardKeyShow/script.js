let table = document.getElementsByClassName('insert')[0]

window.addEventListener('keydown', (e)=>{
 table.innerHTML =
 `
  <table border='1'>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
 ` 
})