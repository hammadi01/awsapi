import json
import boto3

def lambda_handler(event, context):
    # Create a new EC2 client
    ec2 = boto3.client('ec2')
    
    # Retrieve information about the instances
    response = ec2.describe_instances()
    
    # Extract the instances from the response
    instances = response['Reservations'][0]['Instances']
    
    # Return the instances as a JSON object
    return {
        'statusCode': 200,
        'body': json.dumps(instances)
    }
