const buttons = document.body.getElementsByTagName('button')
let endorsements = 0
for (const e of buttons){
  if (e.innerText.match(/^Endorse$/)){
    e.click()
    endorsements++
  }
}
alert(`endorsing ${endorsements} skills...`)
