
export class MailBody {
  static getHtml() {
    return `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          background-color: #2E2E2E;
          font-family: Arial, sans-serif;
          color: #FAFAFA;
        }
        
        .header {
          color: #FAFAFA;
          padding: 20px;
          text-align: center;
        }
        
        .content {
          padding: 20px;
        }
        
        .button {
          background-color: #D82148;
          color: #FAFAFA;
          padding: 10px 20px;
          text-decoration: none;
          display: inline-block;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Welcome to Board</h1>
      </div>
      <div class="content">
        <p>Hello there,</p>
        <p>We are excited to have you on board. You can start managing your tasks, issues, and projects efficiently with Board. Here's to a more organized and productive workflow.</p>
        <p>Get started now by clicking the button below:</p>
        <a class="button" href="https://your-board-url.com">Get Started</a>
        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
        <p>Thank you for choosing Board!</p>
      </div>
    </body>
    </html>`;
  }
}