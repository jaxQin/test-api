const fse = require('fs-extra');

function add({ title, time }) {
  console.log('add', title);
  let res = query({ title, time });
  if (res) {
    return;
  }

  let origin = [];
  try {
    origin = fse.readJsonSync('./movie.json');
  } catch (error) {}
  origin.push({ title, time });
  fse.outputJSONSync('./movie.json', origin);
}

function query({ title, time }) {
  let origin = [];
  try {
    origin = fse.readJsonSync('./movie.json');
  } catch (error) {}
  return origin.find(item => {
    return item.title == title;
  });
}

module.exports = {
  dbLib: {
    add,
    query
  }
};
