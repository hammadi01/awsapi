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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

