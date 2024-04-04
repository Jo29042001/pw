
var push =require('web-push');
let vapidkeys={
    publicKey: 'BNyZC1CnuUAxz1cymU2M1BTibrO4STHAyYChfH8Jp6fs3w5riubhgdfcZLxxnnl79P6l3xMPbLBf3ianHjyuvyo',
    privateKey: 'rwMBUqCsB2Gcd4u-25vXF7dOeqSwRPQN1mgu72hgdfc'
  }
  push.setVapidDetails('mailto:test@code.co.uk',vapidkeys.publicKey,vapidkeys.privateKey)
  let sub={};
  push.sendNotification(sub,'test message')