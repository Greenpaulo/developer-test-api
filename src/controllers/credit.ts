import { Request, Response } from 'express';
import axios from 'axios';

// @desc      Get a customers credit info by name and address
// @route     POST /credit-search
// @access    Public
const getCreditInfo = async (req: Request, res: Response ) => {

  const baseURL = 'https://developer-test-service-2vfxwolfiq-nw.a.run.app/';

  const { surname, address, postcode } = req.body;

  const headers = {
    headers: {
      "content-type": "application/json"
    }
  }

  const getAddressId = async () => {

    // Check if user lives in a flat
    let address1 = "";
    let address2 = "";
    
    if (address.includes('Flat')){
      const parts = address.match(/^(\S+? \S+?) ([\s\S]+?)$/);
      address1 = parts[1];
      address2 = parts[2]
    } else {
      address1 = address;
    }

    const userAddress = {
      "address1": address1,
      "address2": address2,
      "postcode": postcode
    }

    const response = await axios.post(`${baseURL}/addresses`, userAddress, headers);

    const id = response.data[0].id;

    return id;
  }

  const addressId = await getAddressId();

  const userNameAndAddressID = {
    "surname": surname,
    "addressId": addressId
  }

  const creditors = await axios.post(`${baseURL}/creditors`, userNameAndAddressID, headers);

  const totalCreditorValue = () => {
    
    let totalValue = 0;
      
    creditors.data.forEach(creditor => {
      totalValue += creditor.value;
    });

    return totalValue;
  }

  const securedCreditorValue = () => {
    
    let securedValue = 0;

    creditors.data.forEach(creditor => {
      if (creditor.secured === true) {
        securedValue += creditor.value;
      }
    });

    return securedValue;
  }

  const unsecuredCreditorValue = () => {
    let unsecuredValue = 0;

    creditors.data.forEach(creditor => {
      if (creditor.secured === false) {
        unsecuredValue += creditor.value;
      }
    });

    return unsecuredValue;
  }

  const unsecuredCreditorCount = () => {
    let unsecuredCount = 0;

    creditors.data.forEach(creditor => {
      if (creditor.secured === false) {
        unsecuredCount ++
      }
    });

    return unsecuredCount;
  }

  const doesQualify = () => {
    const unsecuredValueInPounds = unsecuredCreditorValue()/100;
    const unsecuredCount = unsecuredCreditorCount();

    return (unsecuredValueInPounds >= 5000 && unsecuredCount >= 2) ? true : false;
  }

  const creditInfo = {
    totalCreditorValue: totalCreditorValue(),
    securedCreditorValue: securedCreditorValue(),
    unsecuredCreditorValue: unsecuredCreditorValue(),
    qualifies: doesQualify()
  }

  return res.json(creditInfo)
};

export default getCreditInfo;


