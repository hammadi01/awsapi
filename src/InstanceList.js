import React, { useState, useEffect } from 'react';
import { List, Typography } from 'antd';
import { EC2 } from 'aws-sdk'; // import the EC2 client

const ec2 = new EC2();

const InstanceList = () => {
    const [instances, setInstances] = useState([]);

    useEffect(() => {
        ec2.describeInstances({}, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                setInstances(data.Reservations.map(reservation => reservation.Instances));
            }
        });
    }, []);

    return (
        <List
            dataSource={instances}
            renderItem={instance => (
                <List.Item>
                    <Typography.Text>{instance.InstanceId}</Typography.Text>
                </List.Item>
            )}
        />
    );
};

export default InstanceList;
