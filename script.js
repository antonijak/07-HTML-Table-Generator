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
  table.style.backgroundColor = tableBckgr.value;
  table.style.borderWidth = `${borderWdth.value}px`;
  table.style.borderColor = borderClr.value;
  table.style.color = fontClr.value;
  table.style.fontFamily = fontTyp.value;
  table.style.fontWeight = fontWght.value;
  main.appendChild(table);
  main.style.backgroundColor = bodyBckgr.value;
  for (let i = 0; i < rows.value; i++){
    const row = document.createElement('tr');
    table.appendChild(row);
  }
  const rowsInTable = document.querySelectorAll('tr');
  for (let i = 0; i < columns.value; i++){
    const tableHead = document.createElement('th');
    tableHead.textContent = `Head${i + 1}`;
    rowsInTable[0].appendChild(tableHead);
    tableHead.style.backgroundColor = headBckgr.value;
    tableHead.style.borderColor = borderClr.value;
    tableHead.style.borderWidth = `${borderWdth.value}px`;
  }
  for (let rw = 1; rw < rows.value; rw++){
    
    for (let clm = 0; clm < columns.value; clm++){
    const tableData = document.createElement('td');
    tableData.textContent = 'value';
    tableData.style.textAlign = txtAlign.value;
    tableData.style.tableWidth = `${tableWdth.value}%`;
    tableData.style.borderWidth = `${borderWdth.value}px`;
    tableData.style.borderColor = borderClr.value;
    rowsInTable[rw].appendChild(tableData);
    }
  }

}

submit.addEventListener('click', createTable);

