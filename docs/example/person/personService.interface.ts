export interface IPersonService {
    getName(personId: string): Promise<string>;
}
