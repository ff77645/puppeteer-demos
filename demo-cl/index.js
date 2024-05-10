const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs')

const chromePath = path.resolve('C:/Users/fy/AppData/Local/Google/Chrome/Application/chrome.exe')


let browser = null;

async function main(){
  browser = await puppeteer.launch({
    timeout: 60000,
    // headless: 'shell', // 设置为 false 表示启动有界面的浏览器
    headless: false, // 设置为 false 表示启动有界面的浏览器
    executablePath: chromePath // 替换为你的浏览器路径
  });

  const pages = 5
  const url = 'https://cl.y66t.eu.org/thread0806.php'
  const dataList = []
  const page = await browser.newPage();
  await goto(page,url,dataList)

  fs.writeFileSync('./data.json',JSON.stringify(dataList,null,2))
  browser.close()
}

main()

async function goto(page,path,dataList,params={page:1}){
  await page.goto(`${path}?fid=25&search=&page=${params.page}`)
  const table = await page.$('#tbody')
  const data = await table.$$eval('.tr3.t_one.tac',nodes=>{
    return nodes.map(node => {
      const a = node.querySelector('tr>td:nth-child(2) a')
      const href = a.href
      const title = a.innerText
      const timestamp = node.querySelector('tr>td:nth-child(3) .s3')?.dataset?.timestamp
      const auth = node.querySelector('tr>td:nth-child(3)>a')?.innerText
      const reply = node.querySelector('tr>td:nth-child(4)')?.innerText
      const downloads = node.querySelector('tr>td:nth-child(5)')?.innerText
      return {
        href,
        title,
        timestamp,
        auth,
        reply,
        downloads
      }
    });
  })
  dataList.push(...data)
}

