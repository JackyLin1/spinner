const str = ['\r|   ','\r/   ','\r-   ','\r\\   '];
function print(arr) {
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => process.stdout.write(arr[i]), 100 + i * 200);
    setTimeout(() => process.stdout.write(arr[0]), 100 + str.length * 200);
  };
};
print(str);