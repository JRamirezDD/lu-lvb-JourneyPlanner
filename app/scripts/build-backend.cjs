// script to build backend in standalone mode, ignoring frontend files.
  // takes advantage of all front-end files being located under /src.
  // correct implementation would be to split off the project into front-end and back-end, but maybe for later? this works for the required use case.

const fs = require('fs');

const path = require('path');
const { exec } = require('child_process');

const appRoot = path.resolve(__dirname, '..');
const srcDir = path.join(appRoot, 'src');
const backupDir = path.join(appRoot, 'src-copy');

function renameSrc(from, to) {
  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log(`Renamed ${from} to ${to}`);
  } else {
    console.error(`Directory ${from} does not exist.`);
    process.exit(1);
  }
}

function runBuild() {
  return new Promise((resolve, reject) => {
    // Run the build command with BUILD_MODE=standalone from the app root
    exec('npx cross-env BUILD_MODE=standalone next build', { cwd: appRoot }, (error, stdout, stderr) => {
      console.log(stdout);
      if (error) {
        console.error(stderr);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  // Rename src to src-copy
  renameSrc(srcDir, backupDir);
  try {
    // Run the build process
    await runBuild();
    renameSrc(backupDir, srcDir);
    console.log('Build succeeded.');
  } catch (error) {
    console.error('Build failed.');
    renameSrc(backupDir, srcDir);
    process.exit(1);
  }
}

main();
