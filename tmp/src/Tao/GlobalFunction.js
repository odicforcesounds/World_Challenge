function addOneToLists(lists) {
  const modifiedLists = [];
  
  for (let i = 0; i < lists.length; i++) {
    const modifiedList = {};
    for (const key in lists[i]) {
      if (typeof lists[i][key] === 'number') {
        modifiedList[key] = lists[i][key] + 1;
      } else {
        modifiedList[key] = lists[i][key];
      }
    }
    modifiedLists.push(modifiedList);
  }
  
  return modifiedLists;
}
