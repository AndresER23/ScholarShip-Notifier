import { chromium } from 'playwright'
import mysqlConn from './db/connection.js'
import { BK_HOST } from './common/links.js'
const PAGE_URL = 'https://web.icetex.gov.co/es/becas/becas-para-estudios-en-el-exterior/becas-vigentes'

const insertScholarShip = (obj, callback) => {
  const { title, href, img } = obj
  mysqlConn.query(
    `INSERT INTO scrapped_scholarships (title, scholship_link, img_link, state) VALUES ('${title}', '${href}', '${img}', '1')`,
    (error, results) => {
      if (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          // Título duplicado
          const error = 'Título duplicado'
          callback(error, null)
        } else {
          // Otro tipo de error
          const error = 'Error al insertar el objeto'
          callback(error, null)
        }
      } else {
        // Se insertó el objeto correctamente
        callback(null, results)
      }
    }
  )
}
const updateState = (titulos, callback) => {
  mysqlConn.query(
    'UPDATE scrapped_scholarships SET state = 0 WHERE title NOT IN (?)',
    [titulos],
    (error) => {
      if (error) {
        callback(error)
      } else {
        callback(null)
      }
    }
  )
}
const sendNewScholarShip = (scholarshipId) => {
  fetch(BK_HOST, {
    method: 'POST',
    body: JSON.stringify(scholarshipId),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json)
    .then(res => console.log(res))
}

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(PAGE_URL)
  const allScholarShips = await page.evaluate(() => {
    const scholarShips = document.querySelectorAll('[class="media"]')
    const data = []
    for (const media of scholarShips) {
      const img = media.querySelector('img').getAttribute('src')
      const href = media.querySelector('a').getAttribute('href')
      const title = media.querySelector('a').textContent.trim()
      data.push({ img, href, title })
    }
    return data
  })
  allScholarShips.forEach(async (element) => {
    insertScholarShip(element, (error, res) => {
      if (error) {
        if (error === 'Título duplicado') {
          console.log('El título ya existe en la base de datos')
        } else console.error('Error al insertar el objeto:', error)
      } else {
        console.log('Objeto insertado correctamente:', res)
        sendNewScholarShip(res.insertId)
      }
    })
  })
  const titles = allScholarShips.map(element => element.title)
  updateState(titles, error => {
    console.log(error)
  })
  await browser.close()
})()
