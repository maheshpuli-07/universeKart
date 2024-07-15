export const oktaConfig = {
    clientId: '0oai83t4l2t8h8KjL5d7',
    issuer: 'https://dev-52275887.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}