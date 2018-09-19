const rows = document.querySelector('#num-of-rows');
const columns = document.querySelector('#num-of-columns');
const tableWdth = document.querySelector('#table-width');
const borderWdth = document.querySelector('#border-width');
const tableBckgr = document.querySelector('#table-background');
const headBckgr = document.querySelector('#head-background');
const bodyBckgr = document.querySelector('#body-background');
const borderClr = document.querySelector('#border-color');
const fontClr = document.querySelector('#font-color');
const fontTyp = document.querySelector('#font-type');
const fontWght = document.querySelector('#font-weight');
const txtAlign = document.querySelector('#text-align');
const main = document.querySelector('main');
const submit = document.querySelector('#submit');

function createTable (){
  main.innerHTML = '';
  const table = document.createElement('table');
  table.style.width = `${tableWdth.value}%`;
  table.style.borderWidth = borderWdth.value;
  table.style.backgroundColor = tableBckgr.value;
  table.style.textAlign = txtAlign.value;
  main.appendChild(table);
  for (let i = 0; i < rows.value; i++){
    const row = document.createElement('tr');
    table.appendChild(row);
  }
  const rowsInTable = document.querySelectorAll('tr');
  for (let i = 0; i < columns.value; i++){
    const tableHead = document.createElement('th');
    tableHead.textContent = 'th';
    rowsInTable[0].appendChild(tableHead);
  }
  for (let rw = 1; rw < rows.value; rw++){
    
    for (let clm = 0; clm < columns.value; clm++){
    const tableData = document.createElement('td');
    tableData.textContent = 'td';
    tableData.style.textAlign = 
    rowsInTable[rw].appendChild(tableData);
    }
  }

}

submit.addEventListener('click', createTable);