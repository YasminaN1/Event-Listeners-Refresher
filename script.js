// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0
document.getElementById('btnClick').addEventListener('click', () => {
clickCount++
render(`<p> You have clicked this button ${clickCount} time(s)`)
})

/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblClickCard = document.getElementById('dblCard')

dblClickCard.addEventListener('dblclick', ()=>{
dblClickCard.classList.toggle('activated')
const state = dblClickCard.classList.contains('activated') ? 'ON' : 'OFF'
render(`<p> Double-click highlight is ${state}</p>`)
})

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', e =>{
   kbKey.textContent = e.key === ' '? ('space') : e.key;
   kbCode.textContent = e.code;
})
/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
})

/* =================================================
   🔥 Event Listeners Challenge (Pick ONE to complete)

   Option A — Hover Highlight + Counter
   - Create a variable to track how many times the card was hovered
   - Add event listeners for mouseenter and mouseleave on the card
   - On mouseenter: add a highlight class, increase the counter, and show the count in #out
   - On mouseleave: remove the highlight class and show a message in #out
================================================== */
let hoverCount = 0
const hoverCard = document.getElementById('dblCard')

hoverCard.addEventListener('mouseenter', () => {
  hoverCard.classList.add('activated')
  hoverCount++
  render(`<p>You have hovered over this card ${hoverCount} time(s).</p>`)
})

hoverCard.addEventListener('mouseleave', () => {
  hoverCard.classList.remove('activated')
  render('<p>Mouse has left the card.</p>')
})