
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    docker_username=process.env.DOCKER_USERNAME;
    console.log("Environment variables ${docker_username}");
    await sleep(5000);
  }
}

main();
