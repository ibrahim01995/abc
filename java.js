// const header = document.getElementById('head');
// const ifield = document.getElementById('ip');
// const btn = document.getElementById('btn');

// ifield.addEventListener('keyup', function (event) {
//   if (event.target.value === "delete") {
//     btn.removeAttribute('disabled')
//     btn.addEventListener('click', function () {
//       header.remove();
//     })
//   }
//   else {
//     btn.setAttribute('disabled', true)
//   }
// })
const totalsit = 12;
let sit = 10;
let asitel = document.getElementById('asit');

asitel.innerText = `abelable sit= ${sit}`
const ssit = [];
function setsit(i) {
  const btn = document.getElementById(i);
  let index = ssit.indexOf(i);
  if (index == -1) {
    ssit.push(i);

    btn.classList.remove('bg-slate-400');
    btn.classList.add('bg-yellow-500');
  }
  else {
    ssit.splice(index, 1);
    btn.classList.remove('bg-yellow-500');
    btn.classList.add('bg-slate-400');

  }
  console.log(ssit);
}


































