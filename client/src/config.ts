// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '1vdj7ukhyk'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
 
  domain: 'dev-nmctiwxt4x1nt4pv.us.auth0.com',            // Auth0 domain
  clientId: 'eEtCniXNLBM6Z1KuCdAJ2xgqc2euvnby',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
