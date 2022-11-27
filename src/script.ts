import {promises} from "fs"
import { resolve } from "path";

type CustomerDataType = { 
  name: string; 
  age: string; 
  cpf: string 
};

abstract class abstractReadData{
  public custumerData : CustomerDataType[] = []

  constructor(protected filePath: string){}

  readonly fixCustumerDataMethod = async(): Promise<void> =>{
      this.custumerData = await this.parseData()
      this.custumerData = this.fixCpf()
  }

  private fixCpf(): CustomerDataType[]{
      return this.custumerData.map(custumer => {
          return {...custumer, cpf: custumer.cpf.replace(/\D/g, '')}
      })
  }
  protected hook(): void {}
  
  protected abstract parseData(): Promise<CustomerDataType[]>
}

export class concreteReadDataTxt extends abstractReadData{

  protected async parseData(): Promise<CustomerDataType[]> {
      const rawData = promises.readFile(this.filePath)
      
      const data = rawData.toString()
      const lines = data.split('\r\n')

      const custumerData: CustomerDataType[] = []

      for (const line of lines) {
          const [name, age, cpf] = line.split('\t')
          custumerData.push({name, age, cpf})
      }
      return custumerData
  }

}

class concreteReadDataJson extends abstractReadData{

  protected async parseData(): Promise<CustomerDataType[]> {
      const rawData = promises.readFile(this.filePath)
      
      const data = JSON.parse(rawData.toString())

      const custumerData: CustomerDataType[] = []

      for (const customer of data) {
          const {name, age, cpf} = customer
          custumerData.push({name, age, cpf})
      }
      return custumerData
  }

}

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
