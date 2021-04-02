let mytext  shortcutParameter

let km = 10000
let abc = "hello world"

let widget = createWidget("Coronavirus", `${km} Today`, `${abc} Total`, "#53d769")
Script.setWidget(widget)
Script.complete()



function createWidget(pretitle, title, subtitle, color) {
  let w = new ListWidget()
  w.backgroundColor = new Color(color)
  let preTxt = w.addText(pretitle)
  preTxt.textColor = Color.white()
  preTxt.textOpacity = 0.8
  preTxt.font = Font.systemFont(16)
  w.addSpacer(5)
  let titleTxt = w.addText(title)
  titleTxt.textColor = Color.white()
  titleTxt.font = Font.systemFont(22)
  w.addSpacer(5)
  let subTxt = w.addText(subtitle)
  subTxt.textColor = Color.white()
  subTxt.textOpacity = 0.8
  subTxt.font = Font.systemFont(18)
  return w
}
