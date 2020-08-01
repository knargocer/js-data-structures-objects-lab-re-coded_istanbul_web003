// Write your solution in this file!

const driver={"knar":"value"};

function updateDriverWithKeyAndValue(driver, key, value){
  driver.key = value;
  return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  Object.assign(driver,{key:value});
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let tmpObj = Object.assign({}, driver);
  delete tmpObj.key; 
  return tmpObj;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}