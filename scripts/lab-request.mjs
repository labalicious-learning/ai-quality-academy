// © 2026 Jared Cluff. Local, synthetic requests only; no credentials.
const requests = {
  'list-beacon': ['GET', '/api/contacts', 'staff'],
  'detail-atlas': ['GET', '/api/contacts/A-101', 'staff'],
  'patch-cross-tenant': ['PATCH', '/api/contacts/A-101', 'owner'],
  'patch-staff': ['PATCH', '/api/contacts/B-201', 'staff'],
  'patch-owner': ['PATCH', '/api/contacts/B-201', 'owner'],
  'detail-beacon': ['GET', '/api/contacts/B-201', 'owner'],
  'send-staff': ['GET', '/api/send', 'staff'],
  'unsupported-allocation-write': ['PATCH', '/api/allocation', 'staff']
};
const [name, mode = 'buggy', portText = '4178'] = process.argv.slice(2);
if (name === '--list') {
  console.log(Object.keys(requests).join('\n'));
} else if (!Object.hasOwn(requests, name ?? '') || !['buggy', 'fixed'].includes(mode) ||
    !/^\d+$/.test(portText) || Number(portText) < 1 || Number(portText) > 65535) {
  console.error('Usage: node scripts/lab-request.mjs REQUEST buggy|fixed [PORT]\nUse --list for request names.');
  process.exitCode = 1;
} else {
  const [method, path, role] = requests[name];
  const query = new URLSearchParams({mode, tenant:'Beacon', role});
  const url = 'http://127.0.0.1:' + Number(portText) + path + '?' + query;
  try {
    const response = await fetch(url, {method, signal:AbortSignal.timeout(10000)});
    console.log(JSON.stringify({request:name, method, url, status:response.status, body:await response.json()}, null, 2));
  } catch (error) {
    console.error('Local request failed: ' + error.message + '. Check npm start and the port.');
    process.exitCode = 1;
  }
}
