// Write your solution in this file!

const driver={"key":"value"};

function updateDriverWithKeyAndValue(driver, key, value){
  let tmpObj = tmpObj.assign({}, driver);
  tmpObj.key = value;
  return tmpObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.assign({key : value});
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let tmpObj = tmpObj.assign({}, driver);
  delete tmpObj.key; 
  return tmpObj;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver.key;
  return driver;
}