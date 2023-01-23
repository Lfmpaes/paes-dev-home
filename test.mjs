import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi({
    appKey: 'zrbOnXF9ik2lJhcEDstmoCB7E',
    appSecret: '2SAhnLktQLZVs2d4zeahQj2ytdO1YW1iC2cXDGbK9TGCK7KwiR',
    accessToken: '38936865-CcDxWhMIdHZaRwk2Du8Ct6i0XxTVwOjnBebLA3JQq',
    accessSecret: 'MLKubLr8KoIPiPAwk47NRT99kk5V8UIYyX4zZqiFyx1GQ',
});
const readOnlyClient = twitterClient.readOnly;

const user = await readOnlyClient.v2.userByUsername('timeandthegio', {
    'user.fields': ['description', 'verified_type'],
});
console.log(user);
