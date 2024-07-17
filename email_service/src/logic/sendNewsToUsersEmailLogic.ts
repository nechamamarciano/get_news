import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";


const key = "mlsn.ffdb93adb44510946ffff3d8db4b1a9c8f6bc12d4d02bbab0e77f53c80242481";

// TODO: missing a verified mailing account to send emails from
export const sendNewsToUsersEmail = async (filteredNews: string, userEmail:string) => {
    try {
        const mailerSend = new MailerSend({
          apiKey: key,
        });
        const sentFrom = new Sender("personalisednewsservice@gmail.com", "Your name");
        
        const recipients = [
          new Recipient(userEmail, "Your Client")
        ];
                
        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setSubject("This is your filtered news")
          .setHtml(`<strong>${filteredNews}</strong>`)
          .setText(filteredNews);
        
        mailerSend.email
            .send(emailParams)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));

          console.log("the news have been sent by email")
    } catch(error:any){
        console.log(error)
    }
}
