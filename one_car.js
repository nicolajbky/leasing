km_beginn = 312 // km bei Fahrzeugübernahme
dauer = 3 // Jahre 
km_pa = 10000 // pro Jahr
datum = "19.02.2011" // Startdatum des Leasing Vertrages

function createWidget() {
  if (km_pa != null && datum!= null){
    datum_array = datum.split(".")
    tag = datum_array[0]
    monat = datum_array[1]-1
    jahr = datum_array[2]
    start_date = new Date(jahr, monat, tag)
    current_date = new Date()
    date_diff_ms = current_date.getTime() - start_date.getTime()

    date_diff_days = date_diff_ms/ 1000 /3600 /24
    date_diff_years = date_diff_days/365

    km_total = km_pa/365*date_diff_days + km_beginn
  }
  let w = new ListWidget()
  w.backgroundColor = new Color("#FFFFFF")
                                
  let preTxt = w.addText("Kilometerzähler")
  preTxt.textColor = Color.black()
  preTxt.textOpacity = 0.8
  preTxt.font = Font.systemFont(14)
  
  w.addSpacer(5)
  
  let titleTxt = w.addText(String(Math.round(km_total)) + " km")
  titleTxt.textColor = Color.black()
  titleTxt.font = Font.systemFont(22)
  
  w.addSpacer(5)
  
  console.log("km_pa" + km_pa)
  console.log("date_diff_years" + date_diff_years)
  km_uebrig = String(Math.round(km_pa*date_diff_years - km_total)) 
  let subTxt = w.addText(km_uebrig + " km übrig")
  subTxt.textColor = Color.black()
  subTxt.textOpacity = 0.8
  subTxt.font = Font.systemFont(14)
  
  w.addSpacer(5)
  
  tage_uebrig =  String( Math.round( date_diff_days ))
  let subTxt2 = w.addText(tage_uebrig + " Tage übrig")
  subTxt2.textColor = Color.black()
  subTxt2.textOpacity = 0.8
  subTxt2.font = Font.systemFont(14)
  
  return w
}

let widget = createWidget()
Script.setWidget(widget)
Script.complete()
