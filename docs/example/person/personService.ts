import { IPersonService } from './personService.interface';

export function personService(): IPersonService {
    return {
        getName(_id: string): Promise<string> {
            return Promise.resolve("A name") // fake implementation
        }
    }
}
