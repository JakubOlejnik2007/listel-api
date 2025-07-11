import Pop3Command from "node-pop3";

import { ParsedMail, simpleParser } from "mailparser";

export const pop3_getPaginatedMails = async (pagination: number, page: number = 1): Promise<ParsedMail[]> => {
    const pop3 = new Pop3Command({
        user: "jakubolejnik@tenco.waw.pl",
        password: "adminadmin",
        host: "mail.monika286.mikr.dev",
        tls: true
    })

    const [mailsNumStr, _] = (await pop3.STAT()).split(" ")

    const mailsNum = parseInt(mailsNumStr)

    const mails: ParsedMail[] = [];

    for (let i = mailsNum - (pagination * (page - 1)); i > 0 && i > mailsNum - (pagination * page); i--) {
        mails.push(await readMessage(pop3, i))
    }




    return mails;
}





const readMessage = async (POP_3CLIENT: Pop3Command, msgNum: number): Promise<ParsedMail> => {
    const mailRaw = await POP_3CLIENT.RETR(msgNum);
    const mailParsed = simpleParser(mailRaw)
    return mailParsed

}

export default readMessage;