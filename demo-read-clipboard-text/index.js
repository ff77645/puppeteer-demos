const puppeteer = require('puppeteer-core');
const path = require('path');
const {awaitFor} = require('../utils')

const chromePath = path.resolve('C:/Users/fy/AppData/Local/Google/Chrome/Application/chrome.exe')


let browser = null;

async function main(){
  browser = await puppeteer.launch({
    timeout: 60000,
    debuggingPort:9222,
    headless: 'shell', // 设置为 false 表示启动有界面的浏览器
    // headless: false, // 设置为 false 表示启动有界面的浏览器
    executablePath: chromePath // 替换为你的浏览器路径
  });

  const url = 'https://www.rmdown.com/link.php?hash=24108c7723f7aa75a42d4cfa13655c234021880d42a'
  const page = await browser.newPage();
  // 获取页面的目标
  const client = await page.createCDPSession();

  // 修改权限，允许读取剪切板
  await client.send('Browser.grantPermissions', {
    permissions: ['clipboardReadWrite']
  });
  await page.goto(url)
  await page.tap('#cbtn')
  await awaitFor(60000)

  const data = await page.evaluate(async () => {
    const text = await navigator.clipboard.readText()
    return text
  })
  console.log({data});
  browser.close()
}

main()