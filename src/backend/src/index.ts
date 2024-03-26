import { Canister, query, text } from 'azle';

export default Canister({
    greet: query([text], text, (name) => {
        return `Hello, ${name}!`;
    })
})

class Message {
    id: string;
    title: string;
    body: string;
    attachmentURL: string;
    createdAt: Date;
    updatedAt: Date | null
}