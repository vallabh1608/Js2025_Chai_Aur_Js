const insert = document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div id = "KeyTable">
    <table>
    <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
    </tr>
    <tr>
    <th>${e.key === ' ' ? 'Space' :e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>
    </tr>
    </table>
    </div>
    
    `

})