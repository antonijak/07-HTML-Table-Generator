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
const copy = document.querySelector('#copy');
let selection;
let input;

function createTable (){
  if (rows.value !== ''){
    main.innerHTML = '';
    const required = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');
    for (let i = 0; i < 2; i++){
      required[i].style.border = 'none';
      labels[i].style.color = 'black';
    }
    const table = document.createElement('table');
    table.style.width = `${tableWdth.value}%`;
    table.style.backgroundColor = tableBckgr.value;
    table.style.borderWidth = `${borderWdth.value}px`;
    table.style.borderColor = borderClr.value;
    table.style.borderStyle = 'solid';
    table.style.borderCollapse = 'collapse';
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
      tableHead.style.borderStyle = 'solid';
      tableHead.style.lineHeight= '2rem';
      tableHead.style.padding= '5px';
    }
    for (let rw = 1; rw < rows.value; rw++){
      
      for (let clm = 0; clm < columns.value; clm++){
      const tableData = document.createElement('td');
      tableData.textContent = 'value';
      tableData.style.textAlign = txtAlign.value;
      tableData.style.tableWidth = `${tableWdth.value}%`;
      tableData.style.borderWidth = `${borderWdth.value}px`;
      tableData.style.borderColor = borderClr.value;
      tableData.style.borderStyle = 'solid';
      tableData.style.lineHeight= '2rem';
      tableData.style.padding= '5px';
      rowsInTable[rw].appendChild(tableData);
      }
    }
    selection = document.querySelector('table');
    input = document.createElement('input');
    document.body.appendChild(input);
    input.id = 'hidden-input'
    input.value = selection.outerHTML;
  } else {
    required = document.querySelectorAll('input');
    labels = document.querySelectorAll('label');
    for (let i = 0; i < 2; i++){
      required[i].style.border = '1px solid red'
      labels[i].style.color = 'red';
    }
  }
}


function copyToClipboard (){
  input.focus();
  input.setSelectionRange(0, 9999);
  document.execCommand('copy');
}

function clearTable (){
rows.value = '';
columns.value = '';
tableWdth.value = '';
borderWdth.value = '';
tableBckgr.value = '#ffffff';
headBckgr.value = '#f2f2f2';
bodyBckgr.value = '#e4d7e8';
borderClr.value = '#b2b2b2';
fontClr.value = '';
fontWght.value = 'normal';
txtAlign.value = 'center';
}

copy.addEventListener('click', copyToClipboard);  
submit.addEventListener('click', createTable);
clear.addEventListener('click', clearTable);

