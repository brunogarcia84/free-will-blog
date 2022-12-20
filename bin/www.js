import app from "../app.js";
import cluster from "cluster";
import os from "os";
import http from "http";
import https from "https";

const cpus = os.cpus();
const onWorkerError = (code, signal) => log(code, signal);

// Variable for taking the port the app is listening
let PORT;
process.env.STATUS === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);

// Opening one thread for each process
if (cluster.isMaster) {
  cpus.forEach((_) => {
    const worker = cluster.fork();
    worker.on("error", (worker, code, signal) =>
      console.log(`Worker ${worker.process.pid} has died.`)
    );
  });
  cluster.on("exit", (error) => {
    const newWorker = cluster.fork();
    newWorker.on("error", onWorkerError);
    log("A new worker has risen", newWorker.process.pid);
  });
  cluster.on("exit", (error) => log(error));
} else {
  const server = app.listen(PORT, () =>
    console.log(
      `Server running in ${process.env.STATUS} on port ${PORT}. Worker ${process.pid} started.`
    )
  );

  server.on("error", (error) => log(error));
}

// Keeping the HTTP alive for new requests
http.globalAgent.keepAlive = true;
https.globalAgent.keepAlive = true;
