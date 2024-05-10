const puppeteer = require('puppeteer-core');
const path = require('path');


const chromePath = path.resolve('C:/Users/fy/AppData/Local/Google/Chrome/Application/chrome.exe')

async function main(){
  const startTime = Date.now()
  // 启动一个无头浏览器实例
  const browser = await puppeteer.launch({
    timeout: 60000,
    // headless: 'shell', // 设置为 false 表示启动有界面的浏览器
    headless: false, // 设置为 false 表示启动有界面的浏览器
    executablePath: chromePath // 替换为你的浏览器路径
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);

const cookies =  [
  {
      "domain": ".x.yupoo.com",
      "expirationDate": 1716445385,
      "hostOnly": false,
      "httpOnly": false,
      "name": "Hm_lvt_28019b8719a5fff5b26dfb4079a63dab",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "1682386089,1684897873",
      "id": 1
  },
  {
      "domain": ".x.yupoo.com",
      "expirationDate": 1749892550.563478,
      "hostOnly": false,
      "httpOnly": false,
      "name": "impress",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "%7B%22id%22%3A2992610%2C%22username%22%3A%22isfy666%22%2C%22token%22%3A%22eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk5MjYxMCwidXNlcm5hbWUiOiJpc2Z5NjY2Iiwic3RhdHVzIjoxLCJidWNrZXQiOiJpc2Z5NjY2Iiwic3RhdGUiOiI0ODJkOTg4MTNlZDFiYjg2M2E4Yjk5YzM0MTMxODAyMSIsImlhdCI6MTcxNTMzMDE0N30.eJPB2Qus-ZX4L5k5mVAJ39jNoslUQfChovaQ1vULN1o%22%2C%22refreshToken%22%3A%22b62a5d3d80bc677956fb8d3e8a03737fac4491c8e9b7dba321d625142477349496796504%22%2C%22vip%22%3A%7B%22vipRating%22%3A0%7D%2C%22email%22%3A%221332799031%40qq.com%22%7D",
      "id": 2
  },
  {
      "domain": ".x.yupoo.com",
      "expirationDate": 1749892427.957467,
      "hostOnly": false,
      "httpOnly": false,
      "name": "version",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "7.8.25",
      "id": 3
  },
  {
      "domain": ".yupoo.com",
      "expirationDate": 1749892550.582479,
      "hostOnly": false,
      "httpOnly": false,
      "name": "language",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "zh-CN",
      "id": 4
  },
  {
      "domain": ".yupoo.com",
      "expirationDate": 1730882843,
      "hostOnly": false,
      "httpOnly": false,
      "name": "tfstk",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "fcbyygcigzUzZ1SH3KTe37L0FQ8JWFesLw9Bt6fHNLvoR64n-6BvFH2JPwWVetK5Vw5K8Bfhp7pQwo1RweL3CR6U5_CRmji5K-T3tsckZZEY5P1RZ6RQ7F4_9ZX6cp9H-3xoiIvvTpmlKpv0gBAIED0lKsV29KAoZpAkiKA9Z40oifCltqR6q8KzRwe3xCKyIs-t82bm53JGaKuHMZRzEdfk320HE4w66s57UVCXyNWw1TamzO5h6MxV8x2wpZ5crMfxUSYNgis64iyo8K_WHhQk7X4lgUJyjaBoa4BGg6j60ZNgWU8kEMTROfy5gaW5wZ5ItmYyPi-NzF4tEpsf_wRFJJUVQ6fOxn7EUgWqpIvxowFltD-kMIJ_gScP0u9NA0TD9DnpmFd2C7OSvDKkMIJ_gSoKvnvvgdNWN",
      "id": 5
  },
  {
      "domain": "x.yupoo.com",
      "expirationDate": 1733792915.55774,
      "hostOnly": true,
      "httpOnly": false,
      "name": "_uab_collina",
      "path": "/",
      "sameSite": "unspecified",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "163694088813437171881825",
      "id": 6
  }
  ]

  await page.setCookie(...cookies)
  page.on('request',request=>{
    const headers = Object.assign({},request.headers(),{
      Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk5MjYxMCwidXNlcm5hbWUiOiJpc2Z5NjY2Iiwic3RhdHVzIjoxLCJidWNrZXQiOiJpc2Z5NjY2Iiwic3RhdGUiOiI0ODJkOTg4MTNlZDFiYjg2M2E4Yjk5YzM0MTMxODAyMSIsImlhdCI6MTcxNTMzMDE0N30.eJPB2Qus-ZX4L5k5mVAJ39jNoslUQfChovaQ1vULN1o',
    })
    request.continue({
      headers
    })
  })
  await page.setViewport({width: 1080, height: 1024});
  // Navigate the page to a URL
  await page.goto('https://x.yupoo.com/gallery');


  ;(await page.waitForSelector('#galleryPage > div.Tabs__sticky > div.toolbar__mask > div > div.toolbar__searchWrap > button')).click()
  ;(await page.waitForSelector('#galleryPage > div.Tabs__sticky > div.toolbar__toolbar > div.Tip__main.Tip__top > div > span')).click()

  // Wait and click on first result
  const searchResultSelector = '#galleryPage > div.Tabs__sticky > div.toolbar__toolbar > button:nth-child(1)';
  
  ;(await page.waitForSelector(searchResultSelector)).tap();

  const inputLabel = '#galleryPage > div.Modal__backdrop.undefined.backdrop.Modal__noafter.display > div > div.Modal__children > div > div > div.Step__content.Step__current > div > div:nth-child(2) > div > div > label'

  const imgs = 'C:/Users/fy/Pictures/th.png'
  await page.waitForSelector(inputLabel);
  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click(inputLabel), // some button that triggers file selection
  ]);
  await fileChooser.accept([imgs]);

  console.log('耗时:',Date.now() - startTime);
  
  await page.waitForSelector('#66666');
  // Print the full title
  await browser.close();
}

main()