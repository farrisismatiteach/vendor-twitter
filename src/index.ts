import dotenv from 'dotenv';
import { getAllScanResults } from './aws';
import { streamVendors } from './twitter';
import { Vendor } from './types/vendor';

dotenv.config();

const init = async () => {
    const vendors = await getAllScanResults<Vendor>(process.env.AWS_VENDORS_TABLE_NAME ?? '');
    const vendorList = vendors.map(vendor => vendor.twitterId);
    await streamVendors(vendorList);
}

init()