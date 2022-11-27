import {promises} from "fs"
import { abstractReadData } from "./abstractReadData";
import { CustomerDataType } from "./costumerDataType";

export class concreteReadDataJson extends abstractReadData{

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