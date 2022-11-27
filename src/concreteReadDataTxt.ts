import {promises} from "fs"
import { abstractReadData } from "./abstractReadData";
import { CustomerDataType } from "./costumerDataType";

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