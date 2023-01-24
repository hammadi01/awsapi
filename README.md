# awsapi
simple Ec2 dashboard using aws API and lambda 
# EC2 Dashboard

This project is a simple dashboard for Amazon Elastic Compute Cloud (EC2) instances in a specific account. It uses AWS Lambda, Python, and the AWS SDK (boto3) to interact with the EC2 API and retrieve information about the instances. Additionally, it uses React to create a dynamic and interactive web page for the dashboard.

## Getting Started

1. Clone the repository
git clone https://github.com/hammadi01/awsapi.git
2. Install the dependencies
npm install

3. Create an IAM user with `AmazonEC2ReadOnlyAccess` permissions and set the access key and secret key in `src/config.js`
4. Start the development server
npm start

This will start the development server and open the project in your browser. By default, the server runs on port 3000, and you can access the project at `http://localhost:3000/`

## Deployment

This project is set up to be deployed to AWS using [AWS Amplify](https://aws.amazon.com/amplify/).

1. Build the project

## Technologies
- React
- AWS SDK (boto3)
- AWS Lambda
- AWS Amplify (for deployment)

## Security
- The IAM user should have the least privilege possible
- Use environment variables to store your access and secret keys
- Use `gitignore` to ignore `config.js`

## Contributing

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Open a pull request


In order to create this Lambda function you need to follow these steps:

Go to the AWS Lambda console.
Click on Create function
Choose Author from scratch
Give a name to your function and choose Python 3.x as runtime.
In the Function code section you can either write the code or upload it as a .py file.
Click on Create function
You can test your function by clicking on the Test button and you can also trigger it using an API Gateway or other AWS services.

Please note that you will also need to configure the IAM role that the Lambda function uses to have the appropriate permissions to interact with the EC2 API.

Additionally, you should also handle the errors, pagination and also securing your access keys and region before deploying it to production.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

