const firstConcat = process.argv[2];

if (firstConcat === undefined) {
  console.log("No argument");
} else {
  console.log(firstConcat);
}