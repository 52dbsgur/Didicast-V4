const {BrowserWindow} = require('electron').remote
const path = require('path')

const selectBtn = document.getElementById('select-screen')

// 새로운 팝업창 생성
selectBtn.addEventListener('click', (event) => {
  const windowID = BrowserWindow.getFocusedWindow().id
  const modalPath = path.join('file://', __dirname, '../../sections/windows/screen.html')
  let win = new BrowserWindow({ width: 500, height: 500 })
  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
