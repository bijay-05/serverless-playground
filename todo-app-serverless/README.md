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

> [!Important]
> Currently, we are using Express Application instance inside lambda function, to handle CRUD features and passing that application instance to serverless function which returns the application as a function. (Normally, we would call `listen` method on the Express Application instance and keep listening for requests in EC2 instance)


## Application Flow
First, the user needs to authenticate with **email** and **password**, where authentication is handled by **AWS Cognito** service. The service returns multiple tokens (`accessToken`, `refreshToken` and `idToken`), which are saved in local storage. The home page views a list of todos in a table. In order to CRUD todo, the request is sent to **API Gateway** which inturn triggers **lambda** function (defined in `backend/handler.js`). An authorizer (`someJwtAuthorizer`) is added to APIs defined in **API Gateway**, which authorizes the request by verifying the JWT token (`idToken` returned from **AWS Cognito**), present in request header.

## Deploying React Application to S3
We will build the react application and put static build files into S3 bucket, using S3 as frontend hosting. To accomplish this with `serverless framework`, we will use `serverless-finch` plugin to extend the base framework. The plugin requires (by default), the `dist` directory produced after build to be present inside `client` directory, which in turn should be at the root directory where `serverless.yml` config file is present.

```bash
npm install serverless-finch --save

## deploy build files
serverless client deploy

## remove bucket and its contents
serverless client remove
```