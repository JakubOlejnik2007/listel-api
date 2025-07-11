import Pop3Command from "node-pop3";

const readMessage = async (msgNum: number) => {
    const pop3 = new Pop3Command({
        user: "jakubolejnik@tenco.waw.pl",
        password: "adminadmin",
        host: "mail.monika286.mikr.dev",
        tls: true
    })
    const str = await pop3.RETR(msgNum)

    console.log(str)

    await pop3.QUIT();

}

export default readMessage;