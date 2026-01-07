# ToDo Application with React
This is a demo **ToDo** application using AWS managed services.

> [!Important]
> For frontend part, I have glued code together from different sources, as you can see mixture of MaterialUI and TailwindCSS on the same codebase.

| UseCase | AWS Service |
|---------|-------------|
| Authentication | Cognito |
| HTTP API | API Gateway |
| Backend | Lambda |
| Database | DynamoDB |
| Frontend | S3 (React) |

Developing web application with serverless services from AWS has its own set of challenges. Apart from writing code to handle business logic, you have to keep deploying code to AWS lambda, since there is no way to verify if the logic works locally. Therefore, to streamline the development ( + deployment ) process, I have decided to use **Serverless Framework**, a tool to ease the process of serverless applications development.