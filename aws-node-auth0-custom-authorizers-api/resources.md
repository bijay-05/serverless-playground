# Following Resources are created

| Resource Name                             | Resource Type                    | Remarks                                                                                                         |
| ----------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ApiGatewayDeployment1766985125157         | AWS::ApiGateway::Deployment      |
| ApiGatewayMethodApiPrivateOptions         | AWS::ApiGateway::Method          |
| ApiGatewayMethodApiPrivatePost            | AWS::ApiGateway::Method          |
| ApiGatewayMethodApiPublicOptions          | AWS::ApiGateway::Method          |
| ApiGatewayMethodApiPublicPost             | AWS::ApiGateway::Method          |
| ApiGatewayResourceApi                     | AWS::Gateway::Resource           | path ('/api')                                                                                                   |
| ApiGatewayResourceApiPrivate              | AWS::Gateway::Resource           | path ('/api/private')                                                                                           |
| ApiGatewayResourceApiPublic               | AWS::Gateway::Resource           | path ('/api/public')                                                                                            |
| ApiGatewayRestApi                         | AWS::ApiGateway::RestApi         | path ('/')                                                                                                      |
| AuthApiGatewayAuthorizer                  | AWS::ApiGateway::Authorizer      | Control Access to your Lambda functions                                                                         |
| AuthFailureGatewayResponse                | AWS::ApiGateway::GatewayResponse | Gateway Response when the custom or Amazon Cognito authorizer failed to authenticate the caller, StatusCode 401 |
| AuthLambdaFunction                        | AWS::Lambda::Function            |
| AuthLambdaPermissionApiGateway            | AWS::Lambda::Permission          |
| AuthLambdaVersionJPTTT                    | AWS::Lambda::Version             |
| AuthLogGroup                              | AWS::Logs::Group                 |
| GatewayResponse                           | AWS::ApiGateway::GatewayResponse | Gateway Response for an AWS authentication token expired error, StatusCode 401                                  |
| IamRoleLambdaExecution                    | AWS::IAM::Role                   | Lambda function assumes this role to forward logs to CloudWatch                                                 |
| PrivateEndpointLambdaFunction             | AWS::Lambda::Function            |
| PrivateEndpointLambdaPermissionApiGateway | AWS::Lambda::Permission          |
| PrivateEndpointLambdaVersionJPTfdfdf      | AWS::Lambda::Version             |
| PrivateEndpointLogGroup                   | AWS::Logs::Group                 |
| PublicEndpointLambdaFunction              | AWS::Lambda::Function            | Normal Lambda Function                                                                                          |
| PublicEndpointLambdaPermissionApiGateway  | AWS::Lambda::Permission          | Permission for APIGateway to invoke lambda function, resource-based policy (resource: lambda function)          |
| PublicEndpointLambdaVersionJPTgfgfg       | AWS::Lambda::Version             | Lambda Function Version                                                                                         |
| PublicEndpointLogGroup                    | AWS::Logs::Group                 | Log group on Cloudwatch                                                                                         |
