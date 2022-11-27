import { resolve } from "path";
import { concreteReadDataTxt } from "./concreteReadDataTxt";
import { concreteReadDataJson } from "./concreteReadDataJson";

async function run() {
  // Cliente code
  function makeLi(title: string): HTMLElement {
    const li = document.createElement('li');
    li.innerText = title
    document.body.appendChild(li);
    return li;
  }
  
  function makeUl(name : string, age: string, cpf: string): HTMLElement {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.innerText = `${name} | ${age} | ${cpf}`;
    return ul;
  }  
//////////////////////////////////////////////////////////////////////
	const filePathTxt = resolve(__dirname, 'files', 'customer.txt')
  const customerDataTxt = new concreteReadDataTxt(filePathTxt) 
	await customerDataTxt.fixCustumerDataMethod()

  const liTxt = makeLi('Arquivo Txt');
  for (const customer of customerDataTxt.custumerData) {
    const {name, age, cpf} = customer
    liTxt.appendChild(makeUl(name, age, cpf))
  }
/////////////////////////////////////////////////////////////////////
  const filePathJson = resolve(__dirname, 'files', 'customer.json')
  const customerDataJson = new concreteReadDataJson(filePathJson) 
	await customerDataJson.fixCustumerDataMethod()

  const liJson = makeLi('Arquivo Json');
  for (const customer of customerDataJson.custumerData) {
    const {name, age, cpf} = customer
    liJson.appendChild(makeUl(name, age, cpf))
  }
}

run()
