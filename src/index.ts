import { dynamodbDescribeTable, dynamodbScanTable, dynamodbUpdateTweet, getAllScanResults, sqsSendMessage } from "./aws"
import dotenv from 'dotenv';
import { Vendor } from "./types/vendor";

dotenv.config();

const init = async () => {
    // // const res = await dynamodbDescribeTable('vendors');
    // // console.log(res);
    // const scanIterator = await dynamodbScanTable('vendors', 5);
    // console.log((await scanIterator.next()).value);
    // console.log((await scanIterator.next()).value);

    // const vendors = await getAllScanResults<Vendor>(process.env.AWS_VENDORS_TABLE_NAME ?? '')
    // console.log(vendors.length);
    // await dynamodbUpdateTweet(process.env.AWS_VENDORS_TABLE_NAME ?? '', {
    //     id: 'tweet1',
    //     userId: 'DCTacoTruck',
    //     userName: 'DC Taco Truck',
    //     text: 'Test tweet',
    //     date: '02/07/23',
    //     geo: {
    //         id: 'geo1',
    //         name: 'Geo location 1',
    //         place_type: 'place 1',
    //         full_name: 'place 1',
    //         country: 'USA',
    //         country_code: 'USA',
    //         coordinates: {
    //             lat: 34.01283,
    //             long: 41.1818
    //         }
    //     }
    // }, 'DCTacoTruck')

    await sqsSendMessage('https://sqs.us-east-1.amazonaws.com/567192499845/testqueue1', 'testmessage1');
}

init()