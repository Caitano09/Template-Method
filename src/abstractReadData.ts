import { CustomerDataType } from "./costumerDataType";

export abstract class abstractReadData{
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