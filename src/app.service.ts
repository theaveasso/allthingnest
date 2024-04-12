import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import { exportWithdrawWTFilePath } from './worker/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  blocking(waittime: number) {
    const startTime = Date.now();
    console.log('Blocking for ' + waittime + 'ms');
    while (Date.now() - startTime < waittime) {}
  }

  worker(waittime: number) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(exportWithdrawWTFilePath, {
      workerData: {
        waittime: waittime
      }})

      worker.on('message', (data) => {
        resolve(data);
      })

      worker.on('error', (err: any) => {
        reject(err)
      })

      worker.on('exit', (code) => {
        console.log('worker did exit with code ', code);
      })
    })
  }
}
